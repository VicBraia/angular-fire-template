(function() {
    'use strict';

    angular
        .module('template-angular-fire')
        .controller('TemplateCtrl', TemplateCtrl);

    TemplateCtrl.$inject = ['$scope', 'EntityFactory'];

    /* @ngInject */
    function TemplateCtrl($scope, EntityFactory) {
        var vm = this;
        vm.subItem = new Object();

        vm.entityList = EntityFactory.getAll();

        vm.saveCreate = saveCreate;
        vm.update = update;
        vm.saveUpdate = saveUpdate;
        vm.remove = remove;


        activate();

        function activate() {

        }

        function saveCreate() {
          var entity = EntityFactory.add(vm.entityToBeAdded);
          vm.entityToBeAdded = null;
        }

        function update(id) {
          vm.entityToBeEdited = EntityFactory.getById(id);
        }

        function saveUpdate() {
          var entity = EntityFactory.edit(vm.entityToBeEdited);
        }

        function remove(e) {
          var entity = EntityFactory.remove(e);
        }


    }
})();
