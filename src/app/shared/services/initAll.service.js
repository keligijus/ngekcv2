(function() {
  'use strict';

  function service(PersonalStatementFactory, skillsFactory, portfolioItemsFactory, workExperienceFactory, hobbiesFactory) {
    var s = {};

    s.run = function() {
      PersonalStatementFactory.init()
      skillsFactory.init();
      portfolioItemsFactory.init();
      workExperienceFactory.init();
      hobbiesFactory.init();
    }


    return s;
  }

  angular
    .module('ngekcv2')
    .factory('initAllService', service);
})();