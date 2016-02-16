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
            f.portfolioItems.data = result;
          });
    }

    return f;
  }

  angular
    .module('portfolioItems')
    .factory('portfolioItemsFactory', factory);
})();