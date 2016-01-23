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
          if (debug) { $log.debug("Retrieved spreadsheets"); }
          if (debug) { $log.log("Data: ", response.feed.entry[0].gsx$personalstatement.$t); }

          f.data = response.feed.entry[0].gsx$personalstatement.$t;

          return;
        });
      }

    f.prepStatement = function(){
      f.data = f.data.replace(/\r?\n/g, '<br />');
    }



// .controller('personalStatementCtrl', ['$scope', '$http', '$sce', function($scope, $http, $sce) {

//   var spreadsheetID = "1OZQIFVP8FH4_2qt97NhnGXYHhkCa357uqzcjbCOF0vI";
//   var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
 
//   $http.get(url).
//   then(function(response) {
//     // this callback will be called asynchronously
//     // when the response is available
 
//     var dataSet = response,
//         DATA = dataSet.data.feed.entry,
//         statement,
//         statementAsHTML;

//         //debug window.D = DATA;

//         statement = DATA[0].gsx$personalstatement.$t;

//         var statementAsHTML = statement;
//         statementAsHTML = statementAsHTML.replace(/\r?\n/g, '<br />');
 
 
//     $scope.statement = $sce.trustAsHtml(statementAsHTML);

//     $('.progress').hide();

 
//   }, function(response) {
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.

//   });  

// }]);    

    return f;
  }

  angular
    .module('personalStatement')
    .factory('PersonalStatementFactory', factory);
})();