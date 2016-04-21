var run = function($httpBackend) {
  var endPoints = {
    baseUrl: {
      part1: "https://spreadsheets.google.com/feeds/list/",
      part2: "/od6/public/values?alt=json"
    },
    ids: {
      hobbies: '1NfV_AwxXAyEB7HiAeYeXB0uhLbgyRsDeMdvffEKmIwY',
      personalStatement: '1OZQIFVP8FH4_2qt97NhnGXYHhkCa357uqzcjbCOF0vI',
      portfolioItems: '1uJ6viYRBD8_WVDBOksy8xTh00I2wnHDAEZHWYcbjYO4',
      softSkill: '1mmKaay5_288QNzVJHiLcnCI0JCH6BYrbK89arrPvdew',
      hardSkill: '1u7Eml-fB9GBng0mAYeNjz9bGcXLZrw4N0G0sK-6l5KY',
      workExperience: '1NIigI2YYKSQdpGD0AkfEz1yRoLITxBH2eK0XwQXzXgM'
    }
  };

  function requestURL(name) {
    return endPoints.baseUrl.part1 + endPoints.ids[name] + endPoints.baseUrl.part2;
  }

  $httpBackend.whenGET(requestURL('hobbies')).respond(200, { "data": {
    feed: {
      entry: [
      {
        gsx$hobby: {
          $: "Swimming, jogging and cycling"
        },
        gsx$comment: {
          $: "As soon as I get good at all of them, I can do a triathlon"
        }
      },
      {
        gsx$hobby: {
          $: "Reading"
        },
        gsx$comment: {
          $: "Books, to blogs, to wikipedia"
        }
      }
      ]
    }
  } });

}

  angular
    .module('httpBackendMock', [
        'ngekcv2'
      ])
    .run(run);

// module.exports = setUp;