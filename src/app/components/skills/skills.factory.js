(function() {
  'use strict';

  function factory($http, $log, $q) {
    var debug = true;
    var f = {
      softSkill: {
        data: [],
        displayData: [],
        spreadsheetID: '1mmKaay5_288QNzVJHiLcnCI0JCH6BYrbK89arrPvdew',
        url: undefined
      },
      hardSkill: {
        data: [],
        displayData: [],
        spreadsheetID: '1u7Eml-fB9GBng0mAYeNjz9bGcXLZrw4N0G0sK-6l5KY',
        url: undefined
      }
    };

    f.getUrl = function(spreadsheetID) {
      return "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json"
    }


    f.init = function() {
      f.softSkill.url = f.getUrl(f.softSkill.spreadsheetID);
      f.hardSkill.url = f.getUrl(f.hardSkill.spreadsheetID);
      return f.combineData();
    }

    f.combineData = function() {
      $q.all([f.getStatement('softSkill'), f.getStatement('hardSkill')])
        .then(function(results) {
          if (debug) { $log.debug("Combined all data"); }
          if (debug) { $log.log("Results: ", results); }

          f.prepData(results[0], 'softSkill');
          f.prepData(results[1], 'hardSkill')
          return results;
        });
    }

    f.getStatement = function(dataType){
      return $http.get(f[dataType].url).then(function(response) {
        if (debug) { $log.debug("Retrieved " + dataType + " data"); }
        if (debug) { $log.log(response.data.feed); }

        return response.data.feed;
      });
    }

    f.prepData = function(data, dataType) {
      data.entry.forEach(function(entry, index) {
        f[dataType].data[index] = f.cleanupData(entry, /gsx\$\w+/, index, dataType);
      });

      if (debug) { $log.debug("Ready data for " + dataType); }
      if (debug) { $log.log(f[dataType].data); }
    }

    f.cleanupData = function(entry, filter, index, dataType) {
      var itemName, dataObj = {};
        for (itemName in entry) {
          if (entry.hasOwnProperty(itemName) && filter.test(itemName)) {
              var cleanitemName = itemName.replace('gsx$', '');
              dataObj[cleanitemName] = entry[itemName].$t;
          }
        }
        return dataObj;

    }

    return f;
  }

  angular
    .module('skills')
    .factory('skillsFactory', factory);
})();