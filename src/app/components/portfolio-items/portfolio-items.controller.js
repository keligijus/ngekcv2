(function() {
  'use strict';


  /** @ngInject */
  function controller(portfolioItemsFactory, SETTINGS) {
    var vm = this;
        vm.f = portfolioItemsFactory;
        vm.settings = SETTINGS;

        vm.f.init();

  }

  angular
    .module('portfolioItems')
    .controller('portfolioItemsController', controller);

})();