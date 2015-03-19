/**
 * Created by ptdecker on 2015-03-19
 */

/**
 * Problem Statement (from Interview Cake, http://www.interviewcake.com)
 *
 * You have a function rand7() that generates a random integer from 1 to 7. Use it to write a function rand5()
 * that generates a random integer from 1 to 5. rand7() returns each integer with equal probability. rand5() must
 * also return each integer with equal probability.
 */

"use strict";

// Test by running 1,000,000 trials and displaying the distribution

var random = require('./random.js'),
    runs = 1000000,
    result,
    results = [0, 0, 0, 0, 0, 0];

console.log("Running 1,000,000 trials to determine distribution . . .");

while (runs > 0) {
    result = random.rand5UsingRand7();
    if (!isNaN(result)) {
        results[random.rand5UsingRand7()] += 1;
        runs -= 1;
    }
}

console.log("Results . . .\n");

for (result = 1; result <= 5; result += 1) {
    console.log(results[result], Math.round(results[result] / 10000) + "%");
}