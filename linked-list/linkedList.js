/**
 * Created by ptdecker on 2014-11-19
 */

/*
 * Basic In Memory Double Linked Linked List
 */

"use strict";

// Node constructor

function Node(content) {
    this.data = content;
    this.priorNode = null;
    this.nextNode = null;
}

// Link another node after this node

Node.prototype.next = function(node) {
    if (node) {
        this.nextNode = node;
        this.nextNode.priorNode = this;
    }
};

// Delete this node preserving the chain it may belong to

Node.prototype.removeNode = function() {

    if (this.priorNode) {
        this.priorNode.nextNode = this.nextNode;
    }

    if (this.nextNode) {
        this.nextNode.priorNode = this.priorNode;
    }

    // Try to release object for garbage collection

    delete this.data;
    delete this.nextNode;
    delete this.priorNode;
};

// Walk downward from this node and return a string of the node contents

Node.prototype.walkDown = function() {
    var currentNode = this,
        nodeList = "";
    while (currentNode) {
        nodeList += JSON.stringify(currentNode.data);
        currentNode = currentNode.nextNode;
        if (currentNode) {
            nodeList += ", ";
        }
    }
    return nodeList;
};

module.exports = Node;