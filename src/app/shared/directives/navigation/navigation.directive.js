(function() {
  'use strict';

  /** @ngInject */
  function directive() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/shared/directives/navigation/index.tpl.html',
      scope: {},
      controller: controller,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }

  function controller($mdSidenav) {
    var vm = this;

    vm.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    }


  }

  angular
    .module('ngekcv2')
    .directive('ekNavigation', directive);
})();
