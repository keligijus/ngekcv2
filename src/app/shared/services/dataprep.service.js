(function() {
  'use strict';

  function service($http, $q, $log, SETTINGS) {
    var s = {};
        s.debug = SETTINGS.debug;

    s.getUrl = function(spreadsheetID) {
      return "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json"
    }

    s.getData = function(dataType, spreadsheetID) {
      var url = s.getUrl(spreadsheetID);
      return $http.get(url, { cache: true }).then(function(response) {
        s.debug && $log.debug("Retrieved " + dataType + " data");
        s.debug && $log.log(response.data.feed);

        return s.prepData(response.data.feed, dataType);
      });
    }

    s.prepData = function(data, dataType) {
      var dataArr = [],
          regex = /gsx\$\w+/;

      data.entry.forEach(function(entry, index) {
        dataArr[index] = s.removeGooglePrefixes(entry, regex, index, dataType);
      });

      s.debug && $log.debug("Ready data for " + dataType);
      s.debug && $log.log(dataArr);

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