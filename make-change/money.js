/**
 * Created by ptdecker on 2015-03-13
 */

/**
 * Money Tools
 */

"use strict";

/* changePossibilitiesBottomUp
 *
 * Use a bottom-up, non-recursive approach to determining the number of ways to make change for a given
 * 'amount' using a set of denominations.
 *
 * This approach requires O(n * m) time and O(n) space
 *
 */

function changePossibilitiesBottomUp(amount, denominations) {

    var waysOfDoingNCents = [1],
        higherAmount,
        higherAmountRemainder,
        i;

    for (i = 1; i < (amount + 1); i += 1) {
        waysOfDoingNCents[i] = 0;
    }

    denominations.forEach(function (coin) {
        for (higherAmount = coin; higherAmount <= (amount + 1); higherAmount += 1) {
            higherAmountRemainder = higherAmount - coin;
            waysOfDoingNCents[higherAmount] += waysOfDoingNCents[higherAmountRemainder];
        }
    });

    return waysOfDoingNCents[amount];
}

/* numWaysToMakeChange
 *
 * Computes the number of ways to make change of a given amount from a set of coin denominations
 */

module.exports.numWaysToMakeChange = function numWaysToMakeChange(amount, denominations) {

    // Error checking and special cases

    if (amount < 0) {
        return new Error("'numWaysToMakeChange': Amount to change must be a positive number");
    }

    if (denominations.length < 1) {
        return new Error("'numWaysToMakeChange': At least one coin of denomination '1' must be provided");
    }

    if (amount === 0) {
        return 0;
    }

    // All error checking passed, do the actual work

    return changePossibilitiesBottomUp(amount, denominations);
}