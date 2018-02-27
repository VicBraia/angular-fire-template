(function() {
  'use strict';

  angular
  .module('template-angular-fire')
  .config(config)
  .run(run);

  function config($urlRouterProvider, $stateProvider){
    var appState = {
          name: 'app',
          url: '/app',
          templateUrl: 'entity/template.html',
          controller: 'AppCtrl',
          controllerAs: 'vm'
    }
    var templateState = {
          name: 'template',
          url: '/template',
          templateUrl: 'entity/template.html',
          controller: 'TemplateCtrl',
          controllerAs: 'vm'
      }
    var createState = {
          name: 'create',
          url: '/create',
          templateUrl: 'entity/create.html',
          controller: 'TemplateCtrl',
          controllerAs: 'vm'
      }

    var updateState = {
          name: 'update',
          url: '/update',
          templateUrl: 'entity/update.html',
          controller: 'TemplateCtrl',
          controllerAs: 'vm'
      }


    $stateProvider.state(appState);
    $stateProvider.state(templateState);
    $stateProvider.state(createState);
    $stateProvider.state(updateState);

    $urlRouterProvider.otherwise('/template');
  }

    function run($rootScope, $state){
      $rootScope.$state = $state;
    }

})();
