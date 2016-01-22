(function() {
  'use strict';


  /** @ngInject */
  function controller() {
    var vm = this;

    console.log('personalStatementCtrl');
  }

  angular
    .module('personalStatement')
    .controller('personalStatementCtrl', controller);

})();