(function() {
  'use strict';

  function factory(dataPrepFactory) {
      var dataPrep = dataPrepFactory,
        f = {
          hobbies: {
            data: [],
            spreadsheetID: '1NfV_AwxXAyEB7HiAeYeXB0uhLbgyRsDeMdvffEKmIwY'
          }
        };

    f.init = function() {
      return dataPrep.getData('hobbies', f.hobbies.spreadsheetID)
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