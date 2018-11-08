var Stack = function() {
  var obj = {};
  obj.storage = {};
  obj.pos = 0;
  // obj.push = stackMethods.push;
  // obj.pop = stackMethods.pop;
  // obj.size = stackMethods.size;
  _.extend(obj, stackMethods)
  return obj;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.pos++;
  this.storage[this.pos] = value;
}

stackMethods.pop = function () {
  var delData =this.storage[this.pos];
  if (this.pos < 1) { 
    return 0; 
  }
  delete this.storage.pos;
  this.pos--;
  return delData;
}

stackMethods.size = function () {
  return this.pos;
}
