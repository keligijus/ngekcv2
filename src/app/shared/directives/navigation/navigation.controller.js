(function() {
  'use strict';


  /** @ngInject */
  function controller($mdSidenav) {
    var vm = this;

    vm.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    }

  }

  angular
    .module('ngekcv2')
    .controller('navigationController', controller);
})();
