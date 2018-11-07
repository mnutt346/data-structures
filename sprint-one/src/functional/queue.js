// FIRST IN FIRST OUT !*!

var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var low; 
  var high;


  // Implement the methods below


  // PUSH
  someInstance.enqueue = function(value) {
    if(Object.keys(storage).length === 0) {
      low = 0;
      high = 1;
      storage[0] = value;
    } else {
      storage[high] = value;
      high++
    }
  };

  // POP
  someInstance.dequeue = function() {
    if(Object.keys(storage).length === 0) {
      return 0;
    } else {
      var dq = storage[low];
      delete storage[low];
      low++
    }
    return dq;
  };

  // SIZE
  someInstance.size = function() {
    if(Object.keys(storage).length === 0) {
      return 0;
    } else {
      return high - low;
    }
  };

  return someInstance;
};
