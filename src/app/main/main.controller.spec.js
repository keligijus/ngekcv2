(function() {
  'use strict';

  describe('Main controller', function(){
    var vm;
    var initAllService;

    beforeEach(module('ngekcv2'));
    beforeEach(inject(function(_$controller_, _initAllService_) {

      vm = _$controller_('MainController');
      initAllService = _initAllService_;
    }));

    it('should refer to initAllService', function() {
      expect(vm.s).toEqual(initAllService);
    });

  });
})();
