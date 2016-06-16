'use strict';

let list = [{
      id: '1',
      name: 'vasya'
    }, {
      id: '2',
      name: 'petya'
    }];

export default class DataService{

  constructor($timeout){
    this.$timeout = $timeout;
  }

  getList() {
    return this.$timeout(()=>{
      return list;
    }, 3000);
  }

  addItem(itemName) {
    list.push({name: itemName});

  }

  getItem(id){

    return list[0]; //find user
  }
    // логика и данные
};
