/**
 * Created by ptdecker on 2014-11-19
 */

/**
 * Problem Statement (from Interview Cake, http://www.interviewcake.com)
 *
 * "Delete a node from a singly linked list, given only a variable pointing to that node.
 * The input could, for example, be the variable b below:
 *
 * a = Node('A')
 * b = Node('B')
 * c = Node('C')
 *
 * a.next = b
 * b.next = c
 *
 * delete_node(b)
 */

"use strict";

var Node = require('./linkedList.js');

var a = new Node('A');
var b = new Node('B');
var c = new Node('C');

a.next(b);
b.next(c);

console.log("Before deletion: " + a.walkDown());

b.removeNode();

console.log("After deletion : " + a.walkDown());