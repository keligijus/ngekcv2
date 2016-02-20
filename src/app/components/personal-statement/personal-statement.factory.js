(function() {
  'use strict';

  function factory(dataPrepService) {
    var dataPrep = dataPrepService,
        f = {
      personalStatement: {
        data: [],
        spreadsheetID: '1OZQIFVP8FH4_2qt97NhnGXYHhkCa357uqzcjbCOF0vI'
      }
    };

    f.init = function() {
      return dataPrep.getData('personalStatement', f.personalStatement.spreadsheetID)
          .then(function(result) {
            f.personalStatement.data = f.addLineBreaks(result[0].personalstatement);
          });
    }

    f.addLineBreaks = function(string) {
      return string.replace(/\r?\n/g, '<br>');
    }


    return f;
  }

  angular
    .module('personalStatement')
    .factory('PersonalStatementFactory', factory);
})();