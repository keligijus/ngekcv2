(function() {
  'use strict';

  /** @ngInject */
  function controller(initAllService) {
    var vm = this;
    vm.s = initAllService

    vm.s.run();

  }

  angular
  .module('ngekcv2')
  .controller('MainController', controller);
})();
