var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.pos = 0;
};



Stack.prototype.push = function (value) {
  this.pos++;
  this.storage[this.pos] = value;
}

Stack.prototype.pop = function () {
  var delData =this.storage[this.pos];
  if (this.pos < 1) { 
    return 0; 
  }
  delete this.storage.pos;
  this.pos--;
  return delData;
}

Stack.prototype.size = function () {
  return this.pos;
}
