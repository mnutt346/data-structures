

// Instantiate a new graph
var Graph = function() {
    this.storage = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    this.newNode = Object.create(Graph.prototype);
    this.newNode.value = node;
    this.newNode.edges = [];
    this.storage.push(this.newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    if(this.storage.length < 1) {
        return false;
    } else {
        for(var i = 0; i < this.storage.length; i++) {
            if(this.storage[i].value === node) {
                return true;
            }
        }
        return false;
    }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    if(this.storage.length < 1) {
        return;
    } else {
        for(var i = 0; i < this.storage.length; i++) {
            if(this.storage[i].value === node) {
                this.storage.splice(i, 1);
            }
        }
    }
    for(let i = 0; i < this.storage.length; i++) {
        for(let j = 0; j < this.storage[i].edges.length; j++) {
            if(this.storage[i].edges[j] === node) {
                this.storage[i].edges.splice(j,1)
            }
        }
    }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    for(let i = 0; i < this.storage.length; i++) {
        if(this.storage[i].value === fromNode) {
            for(let j = 0; j < this.storage[i].edges.length; j++) {
                if(this.storage[i].edges[j] === toNode) {
                    return true;
                }
            }
        }
    }
    return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    for(let i = 0; i < this.storage.length; i++) {
        if(this.storage[i].value === fromNode) {
            this.storage[i].edges.push(toNode)
        } else if (this.storage[i].value === toNode) {
            this.storage[i].edges.push(fromNode);
        }
    }
    
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    for(let i = 0; i < this.storage.length; i++) {
        if(this.storage[i].value === fromNode) {
            for(let j = 0; j < this.storage[i].edges.length; j++) {
                if(this.storage[i].edges[j] === toNode) {
                    this.storage[i].edges.splice(j, 1);
                }
            }
        } else if (this.storage[i].value === toNode) {
            for(let j = 0; j < this.storage[i].edges.length; j++) {
                if(this.storage[i].edges[j] === fromNode) {
                    this.storage[i].edges.splice(j, 1);
                }
            }
        }
    }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    for(var i = 0; i < this.storage.length; i++) {
        cb(this.storage[i].value);
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


