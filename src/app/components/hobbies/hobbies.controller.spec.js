(function() {
  'use strict';

  describe('Hobbies controller', function(){
    var vm;
    var hobbiesFactory;

    beforeEach(module('ngekcv2'));
    beforeEach(inject(function(_$controller_, _hobbiesFactory_) {

      vm = _$controller_('HobbiesController');
      hobbiesFactory = _hobbiesFactory_;
    }));

    it('should refer to hobbiesFactory', function() {
      expect(vm.f).toEqual(hobbiesFactory);
    });


  });
})();
