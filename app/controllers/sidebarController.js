'use strict';

export default class SideBarController{

  constructor(dataService, $rootScope){
    this.list = dataService.getList();

    this.lastItem = $rootScope.lastItem;

    $rootScope.$watch('lastItem', (newValue, oldValue)=>{
      console.log('oldValue: ', oldValue);
      console.log('newValue: ', newValue);
      this.lastItem = $rootScope.lastItem;
    });

      // связывает вью с логикой
  }
}
