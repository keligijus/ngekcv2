(function() {
  'use strict';

  function factory($http, $log, $q) {
    var debug = true;
    var f = {
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

    f.getUrl = function(spreadsheetID) {
      return "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json"
    }

    f.softSkill.url = f.getUrl(f.softSkill.spreadsheetID);
    f.hardSkill.url = f.getUrl(f.hardSkill.spreadsheetID);

    f.init = function() {
      return f.combineData();
    }

    f.combineData = function() {
      $q.all([f.getStatement('softSkill'), f.getStatement('hardSkill')])
        .then(function(results) {
          if (debug) { $log.debug("Combined all data"); }
          if (debug) { $log.log("Results: ", results); }

          f.prepData(results[0], 'softSkill');
          f.prepData(results[1], 'hardSkill')
          return results;
        });
    }

    f.getStatement = function(skillType){
      return $http.get(f[skillType].url).then(function(response) {
        if (debug) { $log.debug("Retrieved " + skillType + " data"); }
        if (debug) { $log.log(response.data.feed); }

        // f[skillType].data = response.data.feed;

        return response.data.feed;
      });
    }

    // f.prepData = function(data) {
    //   f.prepSoftSkill(data[0]);
    //   f.prepHardSkill(data[1]);
    // }

    f.prepSoftSkill = function(data) {
      data.entry.forEach(function(entry) {
        f.softSkill.data.trait = entry.gsx$trait.$t;
        f.softSkill.data.whyUseful = entry.gsx$whyuseful.$t;
      });

    }

    f.prepData = function(data, skillType) {
      data.entry.forEach(function(entry, index) {
        f[skillType].data[index] =f.asignSkills(entry, /gsx\$\w+/, index, skillType);
      });

      if (debug) { $log.debug("Ready data for " + skillType); }
      if (debug) { $log.log(f[skillType].data); }
    }

    f.asignSkills = function(entry, filter, index, skillType) {
      var skillName, skillsObj = {};
        for (skillName in entry) {
          if (entry.hasOwnProperty(skillName) && filter.test(skillName)) {
              var cleanSkillName = skillName.replace('gsx$', '');
              skillsObj[cleanSkillName] = entry[skillName].$t;
          }
        }
        return skillsObj;

    }

    return f;
  }

  angular
    .module('skills')
    .factory('skillsFactory', factory);
})();