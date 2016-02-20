(function() {
  'use strict';

  function service($http, $q, $log, SETTINGS) {
    var s = {};
    var debug = SETTINGS.debug;

    s.getUrl = function(spreadsheetID) {
      return "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json"
    }

    s.getData = function(dataType, spreadsheetID) {
      var url = s.getUrl(spreadsheetID);
      return $http.get(url, { cache: true }).then(function(response) {
        if (debug) { $log.debug("Retrieved " + dataType + " data"); }
        if (debug) { $log.log(response.data.feed); }

        // return response.data.feed;
        return s.prepData(response.data.feed, dataType);
      });
    }

    s.prepData = function(data, dataType) {
      var dataArr = [],
          regex = /gsx\$\w+/;

      data.entry.forEach(function(entry, index) {
        dataArr[index] = s.removeGooglePrefixes(entry, regex, index, dataType);
      });

      if (debug) { $log.debug("Ready data for " + dataType); }
      if (debug) { $log.log(dataArr); }

      return dataArr;
    }

    s.removeGooglePrefixes = function(entry, filter) {
      var itemName, dataObj = {};
        for (itemName in entry) {
          if (entry.hasOwnProperty(itemName) && filter.test(itemName)) {
              var cleanitemName = itemName.replace('gsx$', '');
              dataObj[cleanitemName] = entry[itemName].$t;
          }
        }
        return dataObj;

    }

    return s;
  }

  angular
    .module('ngekcv2')
    .factory('dataPrepService', service);
})();