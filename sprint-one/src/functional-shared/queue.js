var Queue = function() {
  var obj = {};
  obj.storage = {};
  obj.low = 0;
  obj.high = 0;

  obj.dequeue = queueMethods.dequeue;
  obj.enqueue = queueMethods.enqueue;
  obj.size = queueMethods.size;
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.high] = value;
  this.high++;
}

queueMethods.dequeue = function () {
  if ((this.high - this.low) <= 0) {
    return 0;
  }
  var  delItem = this.storage[this.low];
  delete this.storage[this.low];
  this.low++;
  return delItem;
}

queueMethods.size = function () {
  return this.high - this.low;
}

