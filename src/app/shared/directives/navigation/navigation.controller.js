(function() {
  'use strict';


  /** @ngInject */
  function controller($mdSidenav, $rootScope) {
    var vm = this;

    vm.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    }

    $rootScope.$on('$stateChangeStart',
      function(event){
        $mdSidenav('left').close();
      });

  }

  angular
    .module('ngekcv2')
    .controller('NavigationController', controller);
})();
