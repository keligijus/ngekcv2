// ngDescribe({
//   name: 'initAll.service',
//   // modules: 'use to inject mocks',
//   inject: [ 'initAllService', 'PersonalStatementFactory', 'skillsFactory', 'portfolioItemsFactory', 'workExperienceFactory', 'hobbiesFactory' ],
//   tests: function (deps) {
//     describe('.run()', function(){
//       it('should init relevant factories', function(){
//         spyOn(deps.PersonalStatementFactory, 'init');

//         deps.initAllService.run();

//         expect(deps.PersonalStatementFactory.init).toHaveBeenCalled();
//       });
//     });

//     it('should run', function(){
//       var i = 5;

//       expect(i).toBe(5);
//     })
//   }
// });