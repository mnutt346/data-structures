
// [2,3,7,6]
var BinarySearchTree = function(value) {
    this.store = {};
    this.store.left = {};
    this.store.right = {};
    this.store.value = value;
};

BinarySearchTree.prototype.insert = function(value) {

    var newNode = function (value) {
        var node = {};
        node.left = {};
        node.right = {};
        node.value = value;
        return node;
    }

    if(Object.keys(this.store.left).length < 1 && Object.keys(this.store.right).length < 1) {
        if(value < this.store.value) {
            this.store.left = newNode(value);
            return;
        } else {
            this.store.right = newNode(value);
            return;
        }
    }

    var recursion = function (nodeA) {
        if(value < nodeA.value) {
            if (Object.keys(nodeA.left).length < 1) {
                nodeA.left = newNode(value);
            } else {
                recursion(nodeA.left);
            }
        } else {
            if (Object.keys(nodeA.right).length < 1) {
                nodeA.right = newNode(value);
            } else {
                recursion(nodeA.right);
            }
        }
    }
    recursion(this.store);
}

BinarySearchTree.prototype.contains = function(value) {
    var containsRecursion = function (node) {
        if(node.value === value) {
            return true;
        } else {
            if(value < node.value) {
                if (Object.keys(node.left).length > 0) {
                    containsRecursion(node.left);
                }
            } else {
                if (Object.keys(node.left).length > 0) {
                    containsRecursion(node.rigth);
                }    
            }
        }
    }
   
    if (this.store.value === value) {
        return true;
    } else if (value < this.store.value) {
        //left
        if(containsRecursion(this.store.left)) {
            return true;
        }
    } else {
        //right
        if(containsRecursion(this.store.right)) {
            return true;
        }
    }
    return false;
}

BinarySearchTree.prototype.depthFirstLog = function(func) {
    var depthFirst = function (node) {
        func(node.value);
        if(Object.keys(node.left).length > 0) {
            depthFirst(node.left)
        }
        if(Object.keys(node.right).length > 0) {
            depthFirst(node.right);
        }

    }
    depthFirst(this.store)
}





/*
 * Complexity: What is the time complexity of the above functions?
 */
