var Stack = function() {
  var lastKey;
  Stack.push = stackMethods.push;
  Stack.pop = stackMethods.pop;
  Stack.size = stackMethods.size;
  return stackMethods;
};

var stackMethods = {};
var storage = {};  

stackMethods.push = function (value) {
  console.log('*****PUSH*****');
  if (Object.keys(storage).length === 0) {
    storage[0] = value;
    lastKey = 0;
  } else {
    lastKey++;
    storage[lastKey] = value;
  }
}

stackMethods.pop = function () {
  console.log('*****POP*****');
  if (Object.keys(storage).length === 0) {
    return 0;
  } else {
    var popVal = storage[lastKey];
    delete storage[lastKey];
    lastKey--;
  }
  return popVal;
}

stackMethods.size = function () {
  if (Object.keys(storage).length === 0) {
    return 0;
  } else {
    return Object.keys(storage).length;
  }
}
