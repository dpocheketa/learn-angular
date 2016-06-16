'use strict';

import _ from 'lodash';

export default class ItemController{
  constructor(dataService, $rootScope, $stateParams){
    console.log('ItemController');
    this.list = dataService.getList();
    this.newItem = 'new item';
    this.userId =  $stateParams.userId;
    this.item = _.find(this.list, {id: this.userId});

  }
};
