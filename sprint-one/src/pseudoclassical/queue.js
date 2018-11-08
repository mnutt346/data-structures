var Queue = function() {
  this.storage = {};
  this.low = 0;
  this.high = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.high] = value;
  this.high++;
}

Queue.prototype.dequeue = function () {
  if((this.high - this.low) <= 0) {
    return 0;
  }
  var del = this.storage[this.low];
  delete this.storage[this.low];
  this.low++;
  return del;
}

Queue.prototype.size = function () {
  return this.high - this.low;  
}