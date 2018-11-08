class Stack {
  
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.storage[this.count] = value
    this.count++;
  }

  pop() {
    if(this.count <= 0) {
      return 0;
    }
    var del = this.storage[this.count -1];
    delete this.storage[this.count - 1];
    this.count--;
    return del
  }

  size() {
    if(this.count <= 0) {
      return 0;
    }
    return this.count;
  }

}

var stack = new Stack();