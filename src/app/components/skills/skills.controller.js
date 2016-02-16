(function() {
  'use strict';


  /** @ngInject */
  function controller(skillsFactory) {
    var vm = this;
        vm.f = skillsFactory;

        vm.f.init();

  }

  angular
    .module('skills')
    .controller('SkillsController', controller);

})();