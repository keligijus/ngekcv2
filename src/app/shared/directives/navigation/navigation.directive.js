(function() {
  'use strict';

  /** @ngInject */
  function directive() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/shared/directives/navigation/index.tpl.html',
      scope: {},
      controller: "navigationController",
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }

  angular
    .module('ngekcv2')
    .directive('ekNavigation', directive);
})();
