/**
 * Created by ptdecker on 2015-01-07
 */

/**
 * Problem Statement (from Interview Cake, http://www.interviewcake.com)
 *
 * Write a function to find the 2nd largest element in a binary search tree
 */

"use strict";

var bst = require('./bst.js');

//var myBST = Object.create(bst());
var myBST = bst();

console.log("");
console.log("Insert An Element");
console.log("-----------------");
myBST.insert({});
console.log(myBST.toString(), myBST.size());
console.log(myBST.toArray());
console.log(myBST.largest());
console.log(myBST.secondLargest());
console.log(myBST.contains('A'));
console.log(myBST.contains('X'));

console.log("");
console.log("Insert An Element");
console.log("-----------------");
myBST.insert('C');
console.log(myBST.toString(), myBST.size());
console.log(myBST.toArray());
console.log(myBST.largest());
console.log(myBST.secondLargest());
console.log(myBST.contains('C'));
console.log(myBST.contains('X'));

console.log("");
console.log("Insert An Element");
console.log("-----------------");
myBST.insert('E');
console.log(myBST.toString(), myBST.size());
console.log(myBST.toArray());
console.log(myBST.largest());
console.log(myBST.secondLargest());
console.log(myBST.contains('E'));
console.log(myBST.contains('X'));

console.log("");
console.log("Insert An Element");
console.log("-----------------");
myBST.insert('B');
console.log(myBST.toString(), myBST.size());
console.log(myBST.toArray());
console.log(myBST.largest());
console.log(myBST.secondLargest());
console.log(myBST.contains('B'));
console.log(myBST.contains('X'));

console.log("");
console.log("Insert An Element");
console.log("-----------------");
myBST.insert('D');
console.log(myBST.toString(), myBST.size());
console.log(myBST.toArray());
console.log(myBST.largest());
console.log(myBST.secondLargest());
console.log(myBST.contains('D'));
console.log(myBST.contains('X'));

console.log("");
console.log("Insert An Element");
console.log("-----------------");
myBST.insert('A');
console.log(myBST.toString(), myBST.size());
console.log(myBST.toArray());
console.log(myBST.largest());
console.log(myBST.secondLargest());
console.log(myBST.contains('A'));
console.log(myBST.contains('C'));
console.log(myBST.contains('X'));


console.log("");
console.log("Largest using 'nth largest' traversal");
console.log("-------------------------------------");
console.log(myBST.nthLargest(1));

console.log("");
console.log("2nd Largest using 'nth largest' traversal");
console.log("-----------------------------------------");
console.log(myBST.nthLargest(2));

console.log("");
console.log("3rd Largest using 'nth largest' traversal");
console.log("-----------------------------------------");
console.log(myBST.nthLargest(3));


console.log("");
console.log("Edge Cases");
console.log("----------");
console.log(myBST.contains());
console.log(myBST.contains({}));
console.log(myBST.nthLargest());
console.log(myBST.nthLargest(500));


console.log("");
console.log("Insert Empty Object");
console.log("-------------------");
myBST.insert({});
console.log(myBST.toString(), myBST.size());
console.log(myBST.toArray());
console.log(myBST.contains({}));
console.log(myBST.contains('X'));

console.log("");
console.log("Delete Some Stuff");
console.log("-----------------");
console.log(myBST.remove('A'));
console.log(myBST.toString(), myBST.size());
console.log(myBST.remove('B'));
console.log(myBST.toString(), myBST.size());
console.log(myBST.remove('X'));
console.log(myBST.toString(), myBST.size());
console.log(myBST.remove({}));
console.log(myBST.toString(), myBST.size());
console.log(myBST.toArray());

console.log("");
console.log("How About A Second BST?");
console.log("-----------------------");

var mySecondBST = bst();
console.log("");
console.log("Insert An Element");
console.log("-----------------");
mySecondBST.insert(1);
console.log(mySecondBST.toString(), mySecondBST.size());
console.log(mySecondBST.toArray());
console.log(mySecondBST.contains(1));
console.log(mySecondBST.contains(2));


console.log("");
console.log("And Still The First is Okay?");
console.log("----------------------------");
console.log(myBST.toString(), myBST.size());

console.log("");
console.log("Test Second Largest Using InterviewCake Example");
console.log("-----------------------------------------------");
var myThirdBST = bst();
myThirdBST.insert(5);
myThirdBST.insert(3);
myThirdBST.insert(1);
myThirdBST.insert(4);
myThirdBST.insert(8);
myThirdBST.insert(7);
myThirdBST.insert(12);
myThirdBST.insert(10);
myThirdBST.insert(9);
myThirdBST.insert(11);
console.log(myThirdBST.toString(), myThirdBST.size());
console.log(myThirdBST.toArray());
console.log(myThirdBST.largest());
console.log(myThirdBST.secondLargest());
