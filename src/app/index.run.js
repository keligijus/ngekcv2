(function() {
  'use strict';

  angular
    .module('ngekcv2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
