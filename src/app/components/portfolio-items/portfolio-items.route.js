(function() {
  'use strict';

  angular
    .module('ngekcv2')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('portfolioItems', {
        url: '/portfolio-items',
        templateUrl: 'app/components/portfolio-items/index.html',
        controller: 'portfolioItemsController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
