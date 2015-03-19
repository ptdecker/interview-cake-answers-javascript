/**
 * Created by ptdecker on 2015-03-19
 */

/**
 * Random Number Tools
 */

"use strict";

/* rand7()
 *
 * Returns a random number from one to seven inclusively.
 */

function rand7() {
    return Math.floor((Math.random() * 7) + 1);
}


/* rand5UsingRand7()
 *
 * Tries to generate a random number from one to five inclusive using rand7() which generates random numbers
 * from one to seven inclusive. It does this by repeatedly picking a rand7() number until a number less than
 * six is returned (thus being in the range of one to five). Since rand7() is based on a purely random
 * distribution, the derived distribution will be random too. In theory, this approach could infinitely run
 * if a six or seven were always returned by rand7(). To guard against this possibility, the algorithm gives
 * up and returns an error after 10,000 tries.
 */

module.exports.rand5UsingRand7 = function rand5UsingRand7() {

    var triesRemaining = 10000,
        result = 0;

    do {
        result = rand7();
        triesRemaining -= 1;
    } while (result > 5 && triesRemaining > 0);

    if (triesRemaining > 0) {
        return result;
    }

    return new Error("'rand5UsingRand7': Could not find a valid rand5() number in a reasonable number of tries.");
}