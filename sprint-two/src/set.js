var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if(this._storage[item]) {
  } else {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  for(var name in this._storage) {
    if(this._storage[name] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  for(var name in this._storage) {
    if(this._storage[name] === item) {
      delete this._storage[name]
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// ADD: constant
// CONTAINS: linear
// REMOVE: linear