(function() {
  'use strict';


  /** @ngInject */
  function controller(PersonalStatementFactory) {
    var vm = this;
    vm.f = PersonalStatementFactory;

    vm.f.init();

  }

  angular
    .module('personalStatement')
    .controller('personalStatementController', controller);

})();