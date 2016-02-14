(function() {
  'use strict';

  /** @ngInject */
function controller($mdSidenav) {
    var vm = this;

    vm.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    }

  }

  function directive() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/shared/directives/header/index.tpl.html',
      scope: {},
      controller: controller,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }


  angular
    .module('ngekcv2')
    .directive('ekHeader', directive);
})();
