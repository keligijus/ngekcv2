(function() {
  'use strict';


  /** @ngInject */
  function controller(hobbiesFactory) {
    var vm = this;
        vm.f = hobbiesFactory;

        vm.f.init();

  }

  angular
    .module('hobbies')
    .controller('hobbiesController', controller);

})();