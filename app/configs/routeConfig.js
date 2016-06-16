'use strict';

import mainTemplate from 'views/main.tpl.html';
import listTemplate from 'views/list.tpl.html';
import itemTemplate from 'views/item.tpl.html';
import dashboardTpl from 'views/dashboard.tpl.html';
import headerTpl from 'views/header.tpl.html';
import sidebarTpl from 'views/sidebar.tpl.html';
import dashboardController from 'controllers/mainController';
import listController from 'controllers/listController';
import sidebarController from 'controllers/sidebarController';
import headerController from 'controllers/headerController';
import itemController from 'controllers/itemController';

export default ($stateProvider, $urlRouterProvider, $locationProvider) => {
  $stateProvider
    .state('root', {
      url: '',
      abstract: true,
      views: {
        '': {
          template: mainTemplate,
          // rootcontroller --> loader --> statechangesuccess, statechange start
        },
        header: {
          template: headerTpl,
          controller: headerController,
          controllerAs: 'header'
        }
      }
    })
    .state('root.dashboard', {
      url: '/dashboard',
      views: {
        main: {
          template: dashboardTpl,
          controller: dashboardController,
          controllerAs: 'main'
        },
        sidebar: {
          template: sidebarTpl,
          controller: sidebarController,
          controllerAs: 'sidebar'
        }
      }
    })
    .state('root.list', {
      url: '/users',
      views: {
        main: {
          template: listTemplate,
          controller: listController,
          controllerAs: 'list'
        },
        sidebar: {
          template: sidebarTpl,
          controller: sidebarController,
          controllerAs: 'sidebar'
        }
      },
      resolve: {
        list: (dataService) =>{
          return dataService.getList();
        }
      }
    })
    .state('root.list.item', {
      url: '/:userId',
      views: {
        'main@root': {
          template: itemTemplate,
          controller: itemController,
          controllerAs: 'item'
        },
        'sidebar@root': {
          template: ''
        }
      },
      resolve: {
        // item -> dataService
      }
    });

  $urlRouterProvider.otherwise('/dashboard');

  // $locationProvider.html5Mode(true);
};
