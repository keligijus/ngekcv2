// ngDescribe({
//   name: 'hobbies.controller',
//   modules: [ 'ngekcv2' ],
//   inject: [ 'hobbiesFactory' ],
//   element: '<div ng-controller="HobbiesController as vm"></div>',
//   tests: function (deps) {
//     it('should refer to hobbiesFactory', function(){
//       var vm = deps.element.scope().vm;

//       expect(vm.f).toEqual(deps.hobbiesFactory)
//     });
//   }
// });