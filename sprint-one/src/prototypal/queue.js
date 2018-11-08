var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.low = 0;
  obj.high = 0;

  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.high] = value;
  this.high++
}

queueMethods.dequeue = function () {
  if((this.high - this.low) <= 0) {
    return 0
  }
  var del = this.storage[this.low];
  delete this.storage[this.low];
  this.low++;
  return del;
}

queueMethods.size = function () {
  return this.high - this.low;
}