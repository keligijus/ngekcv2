(function() {
  'use strict';

  function service($log, SETTINGS) {
    var s = {};
    var debug = SETTINGS.debug;

    s.prepData = function(data, dataType) {
      var dataArr = [];
      data.entry.forEach(function(entry, index) {
        dataArr[index] = s.cleanupData(entry, /gsx\$\w+/, index, dataType);
      });

      if (debug) { $log.debug("Ready data for " + dataType); }
      if (debug) { $log.log(dataArr); }

      return dataArr;
    }

    s.cleanupData = function(entry, filter) {
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