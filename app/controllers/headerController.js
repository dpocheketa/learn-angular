'use strict';

export default class HeaderController{
  constructor(){

    console.log('Header');

    this.menuItems = [{
      title: 'Dashboard',
      state: 'root.dashboard'
    }, {
      title: 'List',
      state: 'root.list'
    }];

  }
};
