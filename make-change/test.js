/**
 * Created by ptdecker on 2015-03-13
 */

/**
 * Problem Statement (from Interview Cake, http://www.interviewcake.com)
 *
 * Imagine you landed a new job as a cashier...
 *
 * Your quirky boss found out that you're a programmer and has a weird request about something they've been wondering
 * for a long time.
 *
 * Write a function that, given:
 *
 * 1. an amount of money
 * 2. a list of coin denominations
 *
 * computes the number of ways to make amount of money with coins of the available denominations.
 *
 * Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number
 * of ways to make 4¢ with those denominations:
 *
 * 1¢, 1¢, 1¢, 1¢
 * 1¢, 1¢, 2¢
 * 1¢, 3¢
 * 2¢, 2¢
 */

"use strict";

var money = require('./money.js');

console.log(money.numWaysToMakeChange( 4, []));         // no denomination
console.log(money.numWaysToMakeChange(-1, [1, 2, 3]));  // negative amount
console.log(money.numWaysToMakeChange( 0, [1, 2, 3]));  // zero amount
console.log(money.numWaysToMakeChange( 4, [1, 2, 3]));  // exercise example
console.log(money.numWaysToMakeChange( 4, [1, 3, 2]));  // out of order list
console.log(money.numWaysToMakeChange( 7, [2, 4]));     // impossible to make change