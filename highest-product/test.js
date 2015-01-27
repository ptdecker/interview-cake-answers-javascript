/**
 * Created by ptdecker on 2015-01-26
 */

/**
 * Problem Statement (from Interview Cake, http://www.interviewcake.com)
 *
 * Given an array_of_ints, find the highest_product you can get from three of the integers.
 *
 * The input array_of_ints will always have at least three integers.
 */

"use strict";

var arraytools = require('./arraytools.js');

// Test case from problem statement

console.log(arraytools.highestProduct([-10, -10, 1, 3, 2], 3));

// Other edge test cases

console.log(arraytools.highestProduct([1, 7, 3, 4], 0));
console.log(arraytools.highestProduct([1, 7, 3, 4], 1));
console.log(arraytools.highestProduct([1, 7, 3, 4], 2));
console.log(arraytools.highestProduct([1, 7, 3, 4], 3));
console.log(arraytools.highestProduct([1, 7, 3, 4], 4));
console.log(arraytools.highestProduct([1, 7, 3, 4], 5));
console.log(arraytools.highestProduct([], 3));
console.log(arraytools.highestProduct([1, 7], 3));

// Edge cases

