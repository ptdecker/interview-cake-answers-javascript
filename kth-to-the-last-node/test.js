/**
 * Created by ptdecker on 2014-12-13
 */

/**
 * Problem Statement (from Interview Cake, http://www.interviewcake.com)
 *
 * You have a linked list ↴ and want to find the kth to last node. Write a function kth_to_last_node() that takes an
 * integer k and the head_node of a singly linked list, and returns the kth to last node in the list.
 *
 * For example:
 *
 * a = Node("Angel Food")
 * b = Node("Bundt")
 * c = Node("Cheese")
 * d = Node("Devil's Food")
 * e = Node("Eccles")
 *
 * a.next = b
 * b.next = c
 * c.next = d
 * d.next = e
 *
 * kth_to_last_node(2, a)
 * # returns the node with value "Devil's Food" (the 2nd to last node)
 */

"use strict";

var Node = require('./linkedlist.js');

var a = new Node("Angel Food");
var b = new Node("Bundt");
var c = new Node("Cheese");
var d = new Node("Devil's Food");
var e = new Node("Eccles");

a.next(b);
b.next(c);
c.next(d);
d.next(e);

console.log("Items: " + a.walkDown());

console.log("2nd to the last item is: " + a.kthToLastNode(2));