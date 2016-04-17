// (function() {
//   'use strict';

//   describe('Hobbies factory', function(){
//     var hobbiesFactory;
//     var dataPrepService;
//     var $rootScope;

//     beforeEach(module('ngekcv2'));
//     beforeEach(inject(function(_$rootScope_, _hobbiesFactory_, _dataPrepService_) {

//       hobbiesFactory = _hobbiesFactory_;
//       dataPrepService = _dataPrepService_;
//       $rootScope = _$rootScope_;
//     }));

//     describe('.init()', function(){
//       it('should ', function() {
//         spyOn(dataPrepService, 'getData');

//         hobbiesFactory.init().then(function(){
//           expect(dataPrepService.getData).toHaveBeenCalled();
//         });


//         $rootScope.$digest();
//       });
//     });

//   });
// })();
