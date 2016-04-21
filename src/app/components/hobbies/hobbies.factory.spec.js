// ngDescribe({
//   name: 'hobbiesFactory',
//   modules: [ 'ngekcv2' ],
//   inject: [ '$httpBackend' ],
//   tests: function (deps) {
//     beforeEach(function(){
//       var id = '1NfV_AwxXAyEB7HiAeYeXB0uhLbgyRsDeMdvffEKmIwY',
//           link = "https://spreadsheets.google.com/feeds/list/" + id + "/od6/public/values?alt=json"
//       deps.$httpBackend.expectGET(link).respond(200);
//     });

//     it('should refer to hobbiesFactory', function(){
//       var vm = deps.element.scope().vm;

//       expect(vm.f).toEqual(deps.hobbiesFactory);
//     });

//   }
// });