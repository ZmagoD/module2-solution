(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuyItem = this;
  toBuyItem.items = ShoppingListCheckOffService.toBuy();

  toBuyItem.alreadyBought = function(itemIndex) {
    ShoppingListCheckOffService.bought(itemIndex);
  }

}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var show = this;

  show.itemsBought = ShoppingListCheckOffService.alreadyBoth();
}

function ShoppingListCheckOffService() {
  var service = this;

  var itemsBought = [];
  var itemsToBuy = [{
    name: 'cookies',
    quantity: 10
  },{
    name: 'eggs',
    quantity: 12
  },{
    name: 'apples',
    quantity: 3
  },{
    name: 'milk',
    quantity: 1
  },{
    name: 'bread',
    quantity: 2
  }];

  service.toBuy = function() {
    return itemsToBuy;
  }

  service.bought = function(index) {
    itemsBought.push(itemsToBuy[index]);
    itemsToBuy.splice(index, 1);
  }

  service.alreadyBoth = function() {
    return itemsBought;
  }
}

})();
