(function() {
  'use strict';


  /** @ngInject */
  function controller(workExperienceFactory, SETTINGS) {
    var vm = this;
        vm.f = workExperienceFactory;
        vm.settings = SETTINGS;

        vm.f.init();

  }

  angular
    .module('workExperience')
    .controller('workExperienceController', controller);

})();