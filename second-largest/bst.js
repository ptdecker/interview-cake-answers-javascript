/**
 * Created by ptdecker on 2015-01-07
 */

/*
 * Binary Search Tree (BST)
 *
 * Recurrsion is heavily used in this implementation of BST. Also, this version only supports unique elements,
 * i.e. duplicate elements will not be inserted into the BST but will instead be ignored.
 */

"use strict";

/* isEmpty
 *
 * Helper function that determines if an object is empty.
 */

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

/* traverse
 *
 * Helper function that recursively traverses a binary search tree using a depth-first approach. For each node
 * traversed, a callback function is called passing the node and the result argument.
 */

function traverse(node, result, callback) {
    if (node === undefined) {
        return;
    }
    traverse(node.left, result, callback);
    callback(node, result);
    traverse(node.right, result, callback);
}

/* insert
 *
 * Insert an element into the binary search tree.
 */

var insert = function insert(data) {

    var current,
        node = {
            value: data
        };

    // At this time, we don't support adding objects nor arrays--only native types, so abort

    if (typeof data === "object") {
        return new Error("BST does not yet support inserting objects or arrays");
    }

    // if root is undefined, then the tree is empty and the new element by default becomes the root.

    if (this.root === undefined) {
        this.root = node;
        return;
    }

    // start at the root of the tree, search down the tree for where the new element should go, then insert it
    // at the appropriate point. Return to caller when inserted.

    current = this.root;
    while (true) {
        if (data < current.value) {

            // Element to be inserted is less than the value at the current node. If the left node of the current
            // node is undefined, then the new element becomes the left node. Otherwise, move the current node
            // further down the tree to the left.

            if (current.left === undefined) {
                current.left = node;
                return;
            }
            current = current.left;

        } else if (data > current.value) {

            // Element to be inserted is greater than the value at the current node. If the right node of the
            // current node is undefined, then the new element becomes the right node. Otherwise, move the current
            // node further down the tree to the right.

            if (current.right === undefined) {
                current.right = node;
                return;
            }
            current = current.right;

        } else {

            // Element to be inserted has the same value at the current node. Since this version of a BST does
            // not support duplicate elements, then ignore inserting this element.

            return;

        }
    }

};

/* remove
 *
 * Remove an element from the binary search tree.
 */

var remove = function remove(data) {

    var foundNode,
        parent,
        current,
        childCount,
        replacement,
        replacementParent;

    // At this time, we don't support objects nor arrays--only native types, so abort

    if (typeof data === "object") {
        return new Error("BST does not yet support removing objects or arrays");
    }

    // Locate the node to be removed. If found, save the node and its parent. Otherwise, exit out.

    foundNode = this.get(data);
    if (foundNode.current === undefined) {
        return false;
    }

    parent = foundNode.parent;
    current = foundNode.current;

    // Determine how many children the node has.

    childCount = (current.left === undefined) ? 0 : 1 + (current.right === undefined) ? 0 : 1;

    // Handle the case where the element to be removed is the root element.

    if (current === this.root) {
        switch (childCount) {
            case 0: // no children so just un-define the root
                this.root = undefined;
                break;
            case 1: // one child so make that child the new root
                this.root = (current.right === undefined) ? current.left : current.right;
                break;
            case 2: // two children so find the node that should be the replacement
                replacement = this.root.left;
                while (replacement.right !== undefined) {
                    replacementParent = replacement;
                    replacement = replacement.right;
                }
                if (replacementParent === undefined) {
                    replacement.right = this.root.right;
                } else {
                    replacementParent.right = replacement.left;
                    replacement.right = this.root.right;
                    replacement.left = this.root.left;
                }
                break;
            default:
                return new Error("Impossible state reached--more than two children of a binary tree");
        }
    } else {
        switch (childCount) {
            case 0: // no children, null out the proper branch of the parent
                if (current.value < parent.value) {
                    parent.left = undefined;
                } else {
                    parent.right = undefined;
                }
                break;
            case 1: // one child, so reassign it to the proper branch of the parent
                if (current.value < parent.value) {
                    parent.left = (current.left === undefined) ? current.right : current.left;
                } else {
                    parent.right = (current.left === undefined) ? current.right : current.left;
                }
                break;
            case 2:
                replacement = current.left;
                replacementParent = current;
                while (replacement.right !== undefined) {
                    replacementParent = replacement;
                    replacement = replacement.right;
                }
                replacementParent.right = replacement.left;
                replacement.right = current.right;
                replacement.left = current.left;
                if (current.value < parent.value) {
                    parent.left = replacement;
                } else {
                    parent.right = replacement;
                }
                break;
            default:
                return new Error("Impossible state reached--more than two children of a binary tree");
        }
    }

    return true;

};

/* get
 *
 * Search the BST to see if it contains an element that matches the passed element. Return the element node if
 * it was found as the attribute 'current' and return it's parent too; otherwise, return an empty object. This
 * bonus parent is returned because it is required by the 'remove' method.
 */

var get = function get(data) {
    var current = this.root,
        parent;
    while (current) {
        if (data === current.value) {
            return {
                current: current,
                parent: parent
            };
        }
        parent = current;
        current = (data < current.value) ? current.left : current.right;
    }
    return {
        current : current,
        parent : parent
    };
};

/* contains
 *
 * Test to see if the BST contains an object. Test for this by trying to get the node using the 'get' method.
 * If the 'current' returned in the result is undefined, than the node does not exist.
 */

var contains = function contains(data) {
    return (this.get(data).current !== undefined);
};

/* size
 *
 * Walk the BST to determine its size.
 */

var size = function size() {
    var count = 0;
    traverse(this.root, count, function counter() {
        count += 1;
    });
    return count;
};

/* toArray
 *
 * Walk the BST inserting the elements into an array.
 */

var toArray = function toArray() {
    var result = [];
    traverse(this.root, result, function addToArray(node, result){
        result.push(node.value);
    });
    return result;
};

/* toString
 *
 * Convert the BST to a string
 */

var toString = function toString() {
    return JSON.stringify(this.root) || JSON.stringify({});
};

/*
 * Export the BST object
 */

var BST = function() {
    return {
        insert: insert,
        remove: remove,
        get: get,
        contains: contains,
        size: size,
        toArray: toArray,
        toString: toString
    };
};

module.exports = BST;
