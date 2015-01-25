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
 */

module.exports.intProductsExcludingIndex = function intProductExcludingIndex(array) {

    var result = [],
        i, j,
        factor;

    for (i = 0; i < array.length; i += 1) {
        for (j = 0; j < array.length; j += 1) {
            factor    = (i === j) ? 1 : array[i];
            result[j] = (result[j] === undefined) ? factor : factor * result[j];
        }
    }

    return result;
};