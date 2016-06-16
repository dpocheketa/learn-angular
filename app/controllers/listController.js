'use strict';

export default class ListController{
  constructor(dataService, $rootScope, list){
    console.log('listController');

    this.list = list; //from resolve


    this.newItem = 'new item';

  }
};
