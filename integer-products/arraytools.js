/**
 * Created by ptdecker on 2015-01-23
 */

/**
 * Array Tools
 */

"use strict";

/* repeatedPush
 *
 * Repeatedly pushes 'value' onto an array 'count' number of times. Can be used to initialize an array of a
 * desired size with a fixed value.
 *
 * The solution below required O(n) time and space. An alternate O(n^2) brute force option is provided too. The
 * O(n) approach is a nice trick that falls out of an observation that the end value at a given index can
 * be determined by multiplying the product of all the values to to the left with the product of all the values
 * to the right. So, it makes one pass over the values populating the result array with the products of the
 * values from the left. Then makes a second pass the other direction multiplying the value at an index with
 * the accumulated product of all the values from the right. A pretty sweet approach.  Parker characterizes this
 * as a "greedy" algorithm; however, I don't think it complies with the definition of such because there is
 * no selection of a candidate from a candidate set (characteristic one) nor feasibility function
 * characteristic two) (c.f. https://en.wikipedia.org/wiki/Greedy_algorithm)
 */

module.exports.intProductsExcludingIndex = function intProductExcludingIndex(array) {

    var result = [],
        i,
        factor;

    /* The brute force O(n^2) approach
    var j;
    for (i = 0; i < array.length; i += 1) {
        for (j = 0; j < array.length; j += 1) {
            factor    = (i === j) ? 1 : array[i];
            result[j] = (result[j] === undefined) ? factor : factor * result[j];
        }
    }
    */

    // The nice, clean, two-pass O(n) approach

    for(factor = 1, i = 0; i < array.length; i += 1) {
        result[i]  = factor;
        factor    *= array[i];
    }

    for (factor = 1, i = (array.length - 1); i >= 0; i -= 1) {
        result[i] *= factor;
        factor    *= array[i];
    }

    return result;
};