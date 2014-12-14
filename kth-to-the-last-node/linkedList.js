/**
 * Created by ptdecker on 2014-11-19
 * Updated on 2014-12-13 by ptdecker to include kthToLastNode() function
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

Node.prototype.next = function next(node) {
    this.nextNode = node;
};

// Delete node preserving the chain it may belong to by shifting nodes up

Node.prototype.removeNode = function removeNode() {

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

Node.prototype.walkDown = function walkDown() {
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

/*
 * Return the "kth to the last node"
 *
 * Will return 'null' if there are less than kth items in the list
 */

Node.prototype.kthToLastNode = function kthToLastNode(k) {

    if (k < 1) {
        return new Error("'kthToLastNode' was passed a value less than '1'");
    }

    var currentNode = this,
        kthNode = this,
        nodeCount = 0;

/*    while (currentNode) {
        if (nodeCount < k) {
            nodeCount += 1;
            if (nodeCount === k) {
                kthNode = this;
            }
        } else {
            kthNode = kthNode.nextNode;
        }
        currentNode = currentNode.nextNode;
    }
*/
    while (currentNode && nodeCount < k) {
        currentNode = currentNode.nextNode;
        nodeCount += 1;
    }

    while (currentNode) {
        currentNode = currentNode.nextNode;
        kthNode = kthNode.nextNode;
    }

    return (nodeCount < k ? null : kthNode.data);
};

module.exports = Node;