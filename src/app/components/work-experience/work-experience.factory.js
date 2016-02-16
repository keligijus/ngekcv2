(function() {
  'use strict';

  function factory($log, dataPrepService) {
      var dataPrep = dataPrepService,
        f = {
          workExperience: {
            data: [],
            spreadsheetID: '1NIigI2YYKSQdpGD0AkfEz1yRoLITxBH2eK0XwQXzXgM'
          }
        };

    f.init = function() {
      return dataPrep.getData('workExperience', f.workExperience.spreadsheetID)
          .then(function(result) {
            f.workExperience.data = f.checkForDisabledLinks(result);
            // f.workExperience.data = result;
          });
    }

    f.checkForDisabledLinks = function(dataArr) {
        dataArr.forEach(function(item) {
            if (item.link.length <= 1) {
                item.disableLink = true;
            }
        });
        return dataArr;
    }

    return f;
  }

  angular
    .module('workExperience')
    .factory('workExperienceFactory', factory);
})();