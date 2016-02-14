(function() {
  'use strict';

  angular
    .module('ngekcv2')
    .config(config);

  /** @ngInject */
  function config($logProvider, $locationProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    $locationProvider.html5Mode(true);
  }

})();
