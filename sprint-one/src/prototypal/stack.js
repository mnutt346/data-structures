var Stack = function() {
  var obj = Object.create(stackMethods);

  obj.count = 0;
  obj.storage = {};

  // obj.push = stackMethods.push;
  // obj.pop = stackMethods.pop;
  // obj.size = stackMethods.size;

  return obj;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.count++
  this.storage[this.count] = value;
}

stackMethods.pop = function() {
  if(this.count < 1) {
    return 0;
  }
  var delItem = this.storage[this.count];
  delete this.storage[this.count];
  this.count--;
  return delItem;
}

stackMethods.size = function() {
  return this.count;
}