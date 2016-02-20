(function() {
  'use strict';

  /** @ngInject */
  function controller(PersonalStatementFactory, skillsFactory, portfolioItemsFactory, workExperienceFactory, hobbiesFactory) {
    // var vm = this;

    PersonalStatementFactory.init();
    skillsFactory.init();
    portfolioItemsFactory.init();
    workExperienceFactory.init();
    hobbiesFactory.init();


  }

  angular
  .module('ngekcv2')
  .controller('MainController', controller);
})();
