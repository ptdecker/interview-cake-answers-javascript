/**
 * Created by ptdecker on 2014-11-12
 */

/*
 * Dynamic Unbounded Knapsack Problem (dynamicUKP)
 *
 * Calculate a solution to the unbounded knapsack problem (UKP) in pseudo-polynomial time using dynamic programming
 *
 * Given an array of double tuples (2-tuples) of weights and values, i.e "(weight, value)" and a maximum capacity,
 * return the maximum total value that can be obtained. The solution assumes all weights and values are positive. Any
 * tuples where this is not the case are ignored. Knapsack capacity and weights are treated as integers. It is also
 * assumed that capacity is always positive--negative capacity knapsacks return a value of zero. This solution uses a
 * tail-recursive approach.
 *
 * Time Complexity: O(nC) where n = number of tuples, C = knapsack capacity
 * Space Complexity: O(C) where C = knapsack capacity
 *
 * Solution is based upon the solution provided at csegeek.com but adapted for the eccentricities of JavaScript with
 * support added for an array of tuples. The csegeek solution also returns a list of the number of items of each that
 * are used to fill the knapsack, but that has been omitted from this solution.
 *
 * c.f. http://en.wikipedia.org/wiki/Knapsack_problem
 * c.f. http://www.csegeek.com/csegeek/view/tutorials/algorithms/dynamic_prog/dp_part7.php
 */

"use strict";

module.exports.dynamicUKP = function dynamicUKP(tuples, capacity) {

    // bail out if capacity is not zero or greater
    if (capacity < 0) {
        return 0;
    }

    // knapsack is a temporary array where the value of each element is the maximum value that can be contained within
    // a knapsack whose weight is the value of the array index

    var WEIGHT   = 0,   // Index of the tuple element that defines the weight (constant)
        VALUE    = 1,   // Index of the tuple element that defines the value (constant)
        knapsack = [0], // Initialize our knapsack array with a zero value first element
        max,
        c, l,           // Pre-calc loop termination (c - capacity, l - tuples.length)
        i, j,           // Loop indices
        x;

    for (j = 1, c = Math.floor(capacity); j <= c; j += 1) {
        knapsack[j] = 0; // expand our array
        max = knapsack[j - 1];
        for (i = 0, l = tuples.length; i < l; i += 1) {
            if (Math.floor(tuples[i][WEIGHT]) > 0 && tuples[i][VALUE] > 0) {
                x = j - Math.floor(tuples[i][WEIGHT]);
                if (x >= 0 && (knapsack[x] + tuples[i][VALUE]) > max) {
                    max = knapsack[x] + tuples[i][VALUE];
                }
            }
            knapsack[j] = max;
        }
    }

    return knapsack[c];
};
