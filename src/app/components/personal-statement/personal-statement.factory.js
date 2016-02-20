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
            f.personalStatement.data = result[0].personalstatement.replace(/\r?\n/g, '<br />');
          });
    }

    // f.prepStatement = function(){
    //   f.personalStatement.data = f.personalStatement.data.replace(/\r?\n/g, '<br />');
    // }

    // f.resource = $resource("https://spreadsheets.google.com/feeds/list/" + f.spreadsheetID + "/od6/public/values?alt=json");

    // f.init = function() {
    //   return f.getStatement().then(function(){
    //     f.prepStatement();
    //   });
    // }

    // f.getStatement = function(){
    //   return f.resource.get().$promise
    //     .then(function(response){
    //       if (debug) { $log.debug("Retrieved Personal Statement Spreadsheet"); }
    //       if (debug) { $log.log("Data: ", response.feed.entry[0].gsx$personalstatement.$t); }

    //       f.data = response.feed.entry[0].gsx$personalstatement.$t;

    //       return;
    //     });
    //   }


    return f;
  }

  angular
    .module('personalStatement')
    .factory('PersonalStatementFactory', factory);
})();