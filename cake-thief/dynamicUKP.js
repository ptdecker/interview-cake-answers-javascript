/**
 * Created by ptdecker on 2014-11-12
 */

/*
 * Dynamic Unbounded Knapsack Problem (dynamicUKP)
 *
 * Calculate a solution to the unbounded knapsack problem (UKP) in pseudo-polynomial time using dynamic programming
 *
 * Given an array of double tuples (2-tuples) of weights and values, i.e "(weight, value)" and a maximum capacity,
 * returns the maximum total value that can be obtained. The solution assumes all weights and values are positive and
 * tuples where this is not the case are ignored. Knapsack capacity and weights are treated as integers.
 *
 * Time Complexity: O(nC) where n = number of tuples, C = knapsack capacity
 * Space Complexity: O(C) where C = knapsack capacity
 *
 * c.f. http://en.wikipedia.org/wiki/Knapsack_problem
 * c.f. http://www.csegeek.com/csegeek/view/tutorials/algorithms/dynamic_prog/dp_part7.php
 */

module.exports.dynamicUKP = function dynamicUKP(tuples, capacity) {

    var WEIGHT = 0;
    var VALUE  = 1;

    var knapsack = [0];
    for (var j = 1; j <= Math.floor(capacity); j++) {
        knapsack.push(0);
        var max = knapsack[j - 1];
        for (var i = 0; i < tuples.length; i++) {
            if (Math.floor(tuples[i][WEIGHT]) > 0 && tuples[i][VALUE] > 0) {
                var x = j - Math.floor(tuples[i][WEIGHT]);
                if (x >= 0 && (knapsack[x] + tuples[i][VALUE]) > max) {
                    max = knapsack[x] + tuples[i][VALUE];
                }
            }
            knapsack[j] = max;
        }
    }

    return knapsack[Math.floor(capacity)];
};
