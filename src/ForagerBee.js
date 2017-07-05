var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];



};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype = ForagerBee;


ForagerBee.prototype.forage = function(ele){
  this.treasureChest.push(ele);
}




