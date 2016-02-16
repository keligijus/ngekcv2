(function() {
  'use strict';

  function factory($http, $log, $q, SETTINGS, dataPrepService) {
    var debug = SETTINGS.debug,
        dataPrep = dataPrepService,
        f = {
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

          f.softSkill.data = dataPrep.prepData(results[0], 'softSkill');
          f.hardSkill.data = dataPrep.prepData(results[1], 'hardSkill');
        });
    }

    f.getStatement = function(dataType){
      return $http.get(f[dataType].url).then(function(response) {
        if (debug) { $log.debug("Retrieved " + dataType + " data"); }
        if (debug) { $log.log(response.data.feed); }

        return response.data.feed;
      });
    }

    return f;
  }

  angular
    .module('skills')
    .factory('skillsFactory', factory);
})();