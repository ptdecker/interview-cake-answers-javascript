/**
 * Created by ptdecker on 2015-01-26
 */

/**
 * Array Tools
 */

"use strict";

/* minIndex
 *
 * Finds the index of the minimum item in an array
 *
 */

function minIndex(array) {
    var i, min;
    for (i = 0; i < array.length; i += 1) {
        if (min === undefined || Math.abs(array[i]) < Math.abs(array[min])) {
            min = i;
        }
    }
    return min;
}

/* highestProduct
 *
 * Calculates the product of the 'size' largest integers contained in an 'array'
 *
 * Parker's suggested solution is fixed at finding the product of the largest three integers. The approach below
 * is a generic approach which returns the product of the largest 'x' integers.
 *
 * Time analysis is:
 *
 *     O(size) + O(n - size) * O(size) where size is a constant 'C'
 *
 *     or
 *
 *     O(size + size * (n - size))
 *
 *     or
 *
 *     O(size + size * n - size ^ 2)
 *
 *     which, I believe, is:
 *
 *     O(size * n) and since size is constant we hae
 *
 *     O(n)
 *
 */

module.exports.highestProduct = function intProductExcludingIndex(array, size) {

    var i,
        highProducts,
        min,
        totalProduct;

    // Return a highest product value of zero if no values are included nor if size is zero

    if (size === 0 || array.length === 0) {
        return 0;
    }

    // Assume that the first 'size' items passed are the largest integers. Do this by slicing off the first
    // 'size' elements and taking the absolute value of each of them.

    highProducts = array.slice(0, size).map(function(num) { return Math.abs(num); });

    // Walk through the remaining elements passed to us in the array (if any).

    for (i = size; i < array.length; i += 1) {

            // if the value of the current item being looked at in the array is greater than the smallest
            // element in the largest products accumulated so far, then replace out that smallest element
            // with the current one.  Note that the minIndex function is O(size) where 'size' is the number
            // of largest indexes are desired.

            min = minIndex(highProducts);
            if (Math.abs(array[i]) > highProducts[min]) {
                highProducts[min] = Math.abs(array[i]);
            }
    }

    // Sum up the highest values found

    totalProduct = highProducts[0];
    for (i = 1; i < highProducts.length; i += 1) {
        totalProduct *= highProducts[i];
    }

    return totalProduct;
};