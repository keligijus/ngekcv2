(function() {
  'use strict';

  function factory(dataPrepFactory) {
      var f = {
          dataPrep: dataPrepFactory,
          hobbies: {
            data: [],
            spreadsheetID: '1NfV_AwxXAyEB7HiAeYeXB0uhLbgyRsDeMdvffEKmIwY'
          }
        };

    f.init = function() {
      return f.dataPrep.getData('hobbies', f.hobbies.spreadsheetID)
          .then(function(result) {
            f.hobbies.data = result;
          });
    }

    return f;
  }

  angular
    .module('hobbies')
    .factory('hobbiesFactory', factory);
})();