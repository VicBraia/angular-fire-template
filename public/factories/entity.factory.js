(function() {
    'use strict';

    angular
        .module('template-angular-fire')
        .factory('EntityFactory', EntityFactory);

    EntityFactory.$inject = ['$firebaseArray','$firebaseObject'];

    /* @ngInject */
    function EntityFactory($firebaseArray, $firebaseObject, $filter) {
      var entityRootRef = firebase.database().ref().child("entities");
      var entityList = $firebaseArray(entityRootRef);

        var service = {
            getAll: getAll,
            getById: getById,
            add: add,
            edit: edit,
            remove: remove,
            addSubItem: addSubItem
            // getAllSkills: getAllSkills,
            // removeSkill: removeSkill,
            // editSkill: editSkill,
            // getPersonBySkill: getPersonBySkill,
            // getPersonBySkillLevel: getPersonBySkillLevel,
            // getPersonByTeam: getPersonByTeam,
            // getPersonByProfile: getPersonByProfile,
            // getAvailablePeople: getAvailablePeople
        };

        return service;

        function getAll() {
          return entityList;
        }

        function getById(id){
          var entityRef = entityRootRef.child(id);
          var entity = $firebaseObject(entityRef);
          return entity;
        }

        function add(entity){
          return entityList.$add(entity);
        }

        function edit(entity){
          return entity.$save();
        }
        function remove(entity){
          return entityList.$remove(entity);
        }

        function addSubItem(entity, subItem){
          var newSubItem = new Object();
          newSubItem.name = subItem.name;

          if(!entity.subItems){
              entity.subItems = [];
            }
            entity.subItems.push(newSubItem);
            entity.$save();
        }

        function getAllsubItems(entity) {
          return person.subItems;
        }
        
        //
        // function removeSkill(person, key){
        //   person.skills.splice(key,1);
        //   person.$save();
        // }
        //
        // function editSkill(personId, skill){
        //   var skillRef = personRef.child(personId).child(skill.$id);
        //   var currentSkill = $firebaseObject(skillRef);
        //   currentSkill = skill;
        //   return currentSkill.$save();
        // }
      }
})();
