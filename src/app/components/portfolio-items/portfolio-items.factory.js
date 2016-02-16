(function() {
  'use strict';

  function factory($log, SETTINGS, dataPrepService) {
    var debug = SETTINGS.debug,
        dataPrep = dataPrepService,
        f = {
          portfolioItems: {
            data: [],
            spreadsheetID: '1uJ6viYRBD8_WVDBOksy8xTh00I2wnHDAEZHWYcbjYO4'
          }
        };

    f.init = function() {
      return dataPrep.getData('portfolioItems', f.portfolioItems.spreadsheetID)
          .then(function(result) {

            f.portfolioItems.data = f.checkForDisabledLinks(result);

          });
    }

    f.checkForDisabledLinks = function(dataArr) {
        dataArr.forEach(function(item) {
            if (item.livelink.length <= 1) {
                item.disableLink = true;
            }
        });
        return dataArr;
    }

    return f;
  }

  angular
    .module('portfolioItems')
    .factory('portfolioItemsFactory', factory);
})();