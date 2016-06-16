'use strict';

export default class MainController{
  constructor(dataService, $rootScope){
    this.list = dataService.getList();
    this.newItem = 'new item';

    this.addItem = function(){
      dataService.addItem(this.newItem);
      $rootScope.lastItem = this.newItem;
      console.log($rootScope.lastItem);
    };

    // связывает вью с логикой
  }
};
