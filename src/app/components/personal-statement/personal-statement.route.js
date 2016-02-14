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
        controller: 'PersonalStatementController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
