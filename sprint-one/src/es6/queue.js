class Queue {

  constructor() {
    this.storage = {};
    this.low = 0;
    this.high = 0;
  }

  enqueue(value) {
    this.storage[this.high] = value;
    this.high++;
  }

  dequeue() {
    if((this.high - this.low) < 1) {
      return 0;
    }
    var del = this.storage[this.low];
    delete this.storage[this.low];
    this.low++;
    return del;
  }

  size() {
    return this.high - this.low;
  }


}

var queue = new Queue()