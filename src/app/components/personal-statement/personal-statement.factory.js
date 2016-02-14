(function() {
  'use strict';

  function factory($resource, $log) {
    var debug = false;
    var f = {
      data: [],
      spreadsheetID: '1OZQIFVP8FH4_2qt97NhnGXYHhkCa357uqzcjbCOF0vI',
      resource: {}
    };

    f.resource = $resource("https://spreadsheets.google.com/feeds/list/" + f.spreadsheetID + "/od6/public/values?alt=json");

    f.init = function() {
      return f.getStatement().then(function(){
        f.prepStatement();
      });
    }

    f.getStatement = function(){
      return f.resource.get().$promise
        .then(function(response){
          if (debug) { $log.debug("Retrieved Personal Statement Spreadsheet"); }
          if (debug) { $log.log("Data: ", response.feed.entry[0].gsx$personalstatement.$t); }

          f.data = response.feed.entry[0].gsx$personalstatement.$t;

          return;
        });
      }

    f.prepStatement = function(){
      f.data = f.data.replace(/\r?\n/g, '<br />');
    }

    return f;
  }

  angular
    .module('personalStatement')
    .factory('PersonalStatementFactory', factory);
})();