var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // last key in storage
  var lastKey;

  // Implement the methods below
  someInstance.push = function(value) {
    // keys.length === 0
    if(Object.keys(storage).length === 0) { 
      storage[0] = value;
      lastKey = 0;
    } 
    // keys.length > 0
    else { 
      lastKey++
      storage[lastKey] = value
    }
    return storage;
  };

  someInstance.pop = function() {
    if (Object.keys(storage).length === 0) {
      return;
    } else {
      var delVal = storage[lastKey];
      delete storage[lastKey];
      lastKey--
    }
    return delVal;
  };

  someInstance.size = function() {
    // storage.size === 0
    if(Object.keys(storage).length === 0) {
      return 0;
    } 
    // return lastKey
    else {
      return lastKey + 1
    }
  }
  return someInstance;
};
