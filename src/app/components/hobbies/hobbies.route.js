(function() {
  'use strict';

  angular
    .module('ngekcv2')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('hobbies', {
        url: '/hobbies',
        templateUrl: 'app/components/hobbies/index.html',
        controller: 'HobbiesController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
