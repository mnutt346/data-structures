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

  var recursive = function (node) {
    for(let i = 0; i < node.children.length; i++) {
      if(node.value === target) {
        return true;
      }
      if(node.children[i].value === target) {
        return true;
      } 
      if(node.children[i].children.length > 0) {
        recursive(node.children[i]);
      }
    }
  }

  for(let i = 0; i < this.children.length; i++) {
    if(this.children[i].value === target) {
      return true;
    } else {
      for(let i = 0; i < this.children.length; i++) {
        if(recursive(this.children[i])) {
          return true;
        } 
      }
    }
  }

  return false
  
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
