var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.children = [];  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if(this.value === target) {
    return true;
  }
  
  for(let i = 0; i < this.children.length; i++) {
        if(this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

// var array = [1,2,3,4,5]
// for(num of array) {
//   console.log(num)
// }
/*
 * Complexity: What is the time complexity of the above functions?
 */
