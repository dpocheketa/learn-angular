  'use strict';

  import angular from 'angular';
  import uiRouter from 'angular-ui-router';
  import MainController from './controllers/mainController';
  import SideBarController from './controllers/sidebarController';
  import DataService from './services/dataService';
  import runConfig from './configs/runConfig';
  import RouteConfig from './configs/routeConfig';

  angular.module('app', [
    'ui.router'
  ])
  .service('dataService', DataService)
  .controller('MainController', MainController)
  .controller('SideBarController', SideBarController)
  .config(RouteConfig)
  .run(runConfig);

  // var config = {
  //   url: 'http://github.com'
  // };
  // angular.module('app').constant('appConfig', config); // определение констант

  // angular.module('app').run(function($rootScope){
  //   // этап запуска
  //   $rootScope.title = 'title';
  //   $rootScope.lastItem = 'lastItem';
  //   console.log('run');
  // });
  // angular.module('app').config(function(){
  //   // этап конфигурации
  //   console.log('config');
  // });

  // angular.module('app').directive('myDirective', function(){
  //   //отдельные компоненты
  // });


