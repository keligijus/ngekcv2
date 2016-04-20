(function() {
  'use strict';

  function directive() {
    var directive = {
      restrict: 'A',
      link: function($scope, element, attrs) {
        element.bind('load', function() {
          $scope.$apply(function(){
            $scope.item.hideLoader = true;
          });
        });
      }
    };

    return directive;
  }


  angular
    .module('ngekcv2')
    .directive('ekImageLoaded', directive);
})();
