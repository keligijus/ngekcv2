(function() {
  'use strict';

  angular
    .module('ngekcv2')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('personalStatement', {
        url: '/personal-statement',
        templateUrl: 'app/components/personal-statement/index.html',
        controller: 'personalStatementCtrl',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
