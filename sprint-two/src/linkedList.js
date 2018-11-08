var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if(list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    
    } else if (list.head === list.tail) {
      list.tail = newNode;
      list.head.next = list.tail;
    } else {
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var headValue = list.head.value;
    var newHead = list.head.next
    delete list.head;
    list.head = newHead;
    return headValue
  };

  list.contains = function(target) {
    var answer = false;
    var recursion = function (node) {
      if(node.value === target) {
        answer = true;
        return;
      } else {
        if(node.next) {
          recursion(node.next)
        }
      }
    }

    if (list.head === null) {
      return false;
    } else if (list.head.value === target) {
      return true
    } else {
      if(list.head.next) {
        recursion(list.head.next);
      }
    }
    return answer
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
