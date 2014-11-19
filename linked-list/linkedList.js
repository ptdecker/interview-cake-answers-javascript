/**
 * Created by ptdecker on 2014-11-19
 */

/*
 * Basic In Memory Single Linked Linked List
 */

"use strict";

// Node constructor

function Node(content) {
    this.data = content;
    this.nextNode = null;
}

// Link another node after this node

Node.prototype.next = function(node) {
    this.nextNode = node;
};

// Delete node preserving the chain it may belong to by shifting nodes up

Node.prototype.removeNode = function() {

    var tempNode = this.nextNode;

    if (tempNode) {
        this.data = this.nextNode.data;
        this.nextNode = this.nextNode.nextNode;
        delete tempNode.data;
        delete tempNode.nextNode;
        tempNode = null;
    }

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