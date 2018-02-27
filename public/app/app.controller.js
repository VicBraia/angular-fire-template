(function() {
    'use strict';

    angular
        .module('template-angular-fire')
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$scope'];

    /* @ngInject */
    function AppCtrl($scope) {
        var vm = this;

        activate();

        function activate() {
          console.log("caraca, mano");

        }
    }
})();
