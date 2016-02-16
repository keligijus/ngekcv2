(function() {
  'use strict';

  function factory($http, $log, $q, SETTINGS, dataPrepService) {
    var debug = SETTINGS.debug,
        d = dataPrepService,
        f = {
      softSkill: {
        data: [],
        displayData: [],
        spreadsheetID: '1mmKaay5_288QNzVJHiLcnCI0JCH6BYrbK89arrPvdew',
        url: undefined
      },
      hardSkill: {
        data: [],
        displayData: [],
        spreadsheetID: '1u7Eml-fB9GBng0mAYeNjz9bGcXLZrw4N0G0sK-6l5KY',
        url: undefined
      }
    };

    f.init = function() {
      return f.combineData();
    }

    f.combineData = function() {
      $q.all([
        d.getData('softSkill', f.softSkill.spreadsheetID),
        d.getData('hardSkill', f.hardSkill.spreadsheetID)
        ])
        .then(function(results) {
          if (debug) { $log.debug("Combined all data"); }
          if (debug) { $log.log("Results: ", results); }

          f.softSkill.data = results[0];
          f.hardSkill.data = results[1];
        });
    }

    return f;
  }

  angular
    .module('skills')
    .factory('skillsFactory', factory);
})();