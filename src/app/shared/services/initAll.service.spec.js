ngDescribe({
  name: 'initAll.service',
  modules: [ 'ngekcv2' ],
  inject: [
            'initAllService',
            'PersonalStatementFactory',
            'skillsFactory',
            'portfolioItemsFactory',
            'workExperienceFactory',
            'hobbiesFactory'
          ],
  tests: function (deps) {
    describe('.run()', function(){
      it('should init relevant factories', function(){
        spyOn(deps.PersonalStatementFactory, 'init');
        spyOn(deps.skillsFactory, 'init');
        spyOn(deps.portfolioItemsFactory, 'init');
        spyOn(deps.workExperienceFactory, 'init');
        spyOn(deps.hobbiesFactory, 'init');

        deps.initAllService.run();

        expect(deps.PersonalStatementFactory.init).toHaveBeenCalled();
        expect(deps.skillsFactory.init).toHaveBeenCalled();
        expect(deps.portfolioItemsFactory.init).toHaveBeenCalled();
        expect(deps.workExperienceFactory.init).toHaveBeenCalled();
        expect(deps.hobbiesFactory.init).toHaveBeenCalled();
      });
    });
  }
});