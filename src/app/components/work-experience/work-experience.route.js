(function() {
  'use strict';

  angular
    .module('ngekcv2')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('workExperience', {
        url: '/work-experience',
        templateUrl: 'app/components/work-experience/index.html',
        controller: 'workExperienceController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
