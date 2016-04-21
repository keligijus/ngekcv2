ngDescribe({
  name: 'hobbiesFactory',
  modules: [ 'httpBackendMock' ],
  inject: [ '$httpBackend',  'hobbiesFactory', 'dataPrepFactory' ],
  tests: function (deps) {
    beforeEach(function(){
      var id = '1NfV_AwxXAyEB7HiAeYeXB0uhLbgyRsDeMdvffEKmIwY',
          link = "https://spreadsheets.google.com/feeds/list/" + id + "/od6/public/values?alt=json"
      deps.$httpBackend.expectGET(link).respond(200);
    });

    it('should reference dataPrepFactory', function(){
      expect(deps.hobbiesFactory.dataPrep).toEqual(deps.dataPrepFactory);
    });

    // describe('.init()', function(){
    //   it('should get hobbies data and store it in hobbiesFactory', function(){
    //     deps.hobbiesFactory.init().then(function(){
    //       expect(deps.hobbiesFactory.hobbies.data).toEqual(5);
    //     });

    //     deps.step();
    //   });
    // });
  }
});