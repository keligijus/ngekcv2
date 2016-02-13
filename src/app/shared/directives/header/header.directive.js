(function() {
  'use strict';


  /** @ngInject */
  function directive() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/shared/directives/header/index.tpl.html',
      scope: {},
      controller: controller,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }

    function controller() {
      // var vm = this;
    }

  angular
    .module('ngekcv2')
    .directive('ekHeader', directive);
})();
