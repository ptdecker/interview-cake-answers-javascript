/**
 * Created by ptdecker on 2015-01-24
 */

/**
 * Problem Statement (from Interview Cake, http://www.interviewcake.com)
 *
 *
 * You have an array of integers, and for each index you want to find the product of every integer except the
 * integer at that index. Write a function get_products_of_all_ints_except_at_index() that takes an array of
 * integers and returns an array of the products.
 *
 * For example, given:
 *
 * [1, 7, 3, 4]
 *
 * your function would return:
 *
 * [84, 12, 28, 21]
 *
 * by calculating:
 *
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * Do not use division in your solution.
 */

"use strict";

var arraytools = require('./arraytools.js');

// Test case from problem statement

console.log(arraytools.intProductsExcludingIndex([1, 7, 3, 4]));

// Edge cases

console.log(arraytools.intProductsExcludingIndex([1, 0, 3, 4]));  // Impact of zero
console.log(arraytools.intProductsExcludingIndex([10]));          // One element
console.log(arraytools.intProductsExcludingIndex([]));            // Empty array
