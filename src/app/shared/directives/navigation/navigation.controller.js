(function() {
  'use strict';


  /** @ngInject */
  function controller($mdSidenav, $rootScope) {
    var vm = this;
        vm.rootScope = $rootScope

    vm.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    }

    vm.rootScope.$on('$stateChangeStart',
      function(){
        $mdSidenav('left').close();
      });

  }

  angular
    .module('ngekcv2')
    .controller('NavigationController', controller);
})();
