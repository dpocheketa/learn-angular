'use strict';

export default function runConfig ($rootScope){
  // этап запуска
  $rootScope.title = 'title';
  $rootScope.lastItem = 'lastItem';
  console.log('run');
};
