/**
 * Created by ptdecker on 2014-12-17
 */

/**
 * Problem Statement (from Interview Cake, http://www.interviewcake.com)
 *
 * In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies
 * orders and enter as one unit. Each order is represented by an "order id" (an integer). We have our lists of orders
 * sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.
 *
 * For example:
 *
 * my_array     = [3,4,6,10,11,15]
 * alices_array = [1,5,8,12,14,19]
 *
 * print merge_arrays(my_array, alices_array)
 * # prints [1,3,4,5,6,8,10,11,12,14,15,19]
 */

"use strict";

var arrayMerge  = require('./arraymerge.js');

// Test happy path set

var myArray     = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19];
console.log("Happy Path Array Merge");
console.log(arrayMerge.merge(myArray, alicesArray));

// Test edge cases

console.log("Alternate Test Cases");
console.log(arrayMerge.merge([], [])); // both empty
console.log(arrayMerge.merge([], [1, 2, 3])); // a empty
console.log(arrayMerge.merge([1, 2, 3], [])); // b empty
console.log(arrayMerge.merge([1, 2], [3, 4, 5])); // exhausting a before b
console.log(arrayMerge.merge([3, 4, 5], [1, 2])); // exhausting b before a
console.log(arrayMerge.merge([1, 2, 5, 6], [3, 4])); // b in the middle of a
console.log(arrayMerge.merge([3, 4], [1, 2, 5, 6])); // a in the middle of b
console.log(arrayMerge.merge([9, 2, 1], [6, 3, 4, 7, 5]));  // not ordered lists

// BONUS: Merging several sorted arrays passed as an array of arrays

console.log("BONUS: Multiple Array Merge Happy Path");
console.log(arrayMerge.mergeMulti([[3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19], [2, 7, 9, 13]]));
console.log("BONUS: Multiple Array Merge Alternate Test Cases");
console.log(arrayMerge.mergeMulti([[], [], []]));
console.log(arrayMerge.mergeMulti([[1, 2, 3], [], []]));
console.log(arrayMerge.mergeMulti([[], [1, 2, 3], []]));
console.log(arrayMerge.mergeMulti([[], [], [1, 2, 3]]));
console.log(arrayMerge.mergeMulti([[1, 2, 3], [4, 5, 6, 7], []]));
console.log(arrayMerge.mergeMulti([[4, 5, 6, 7], [1, 2, 3], []]));
console.log(arrayMerge.mergeMulti([[], [4, 5, 6, 7], [1, 2, 3]]));
console.log(arrayMerge.mergeMulti([[1, 2, 7, 8], [3, 6], [4, 5]]));

// Playing around with an array flattening method

console.log("Array Flattening Experiment");
console.log(arrayMerge.flatten([[1, 2], [3, 4]]));

console.log(arrayMerge.flatten([[[10, 11], 1, 2], [3, 4, [5, 6, 7, [12]]]]));

