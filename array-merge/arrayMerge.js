/**
 * Created by ptdecker on 2014-12-17
 */

/*
 * Simple Sorted Array Merge Utility Function
 */

"use strict";

module.exports.merge = function merge(array1, array2) {
    var result = [],
        i = 0,
        j = 0;
    while (i < array1.length || j < array2.length) {
        if ((i < array1.length && array1[i] < array2[j]) ||  j === array2.length) {
            result.push(array1[i]);
            i += 1;
        } else {
            result.push(array2[j]);
            j += 1;
        }
    }
    return result;
};

/*
 * Merge an Array of Sorted Arrays Utility Function
 */

module.exports.mergeMulti = function mergeMulti(arrayOfArrays) {

    var result  = [],               // fully merged results
        indices = [],               // an array of indices for each array passed
        i,                          // loop index
        arrayContainingNextElement, // pointer to the embedded array containing the smallest element
        nextElement,                // the smallest element found on the current pass through the embedded arrays
        numOfArrays,                // the number of embedded arrays
        moreElementsToMerge;        // a flag indicating that there are still more elements to be merged

    // Start with the first element of each of the embedded arrays

    for (i = 0, numOfArrays = arrayOfArrays.length; i < numOfArrays; i += 1) {
        indices[i] = 0;
    }

    // Keep merging elements until all elements in all embedded arrays have been processed

    do {

        arrayContainingNextElement = null;
        nextElement = null;
        moreElementsToMerge = false;

        // Spin through all the embedded arrays looking for the smallest element. Keep track of which array contains
        // this smallest element. Then, once found, push the smallest element into the results array and move the
        // index pointer for the array that contained the element to the next element in that respective array. Keep
        // going so long as at least one array contains more elements that need to be processed.

        for (i = 0, numOfArrays = arrayOfArrays.length; i < numOfArrays; i += 1) {
            if (indices[i] < arrayOfArrays[i].length && !moreElementsToMerge) {
                moreElementsToMerge = true;
            }
            if (indices[i] < arrayOfArrays[i].length && ((arrayContainingNextElement === null) || arrayOfArrays[i][indices[i]] < nextElement)) {
                arrayContainingNextElement = i;
                nextElement = arrayOfArrays[i][indices[i]];
            }
        }
        if (arrayContainingNextElement !== null) {
            result.push(nextElement);
            indices[arrayContainingNextElement] += 1;
        }

    } while (moreElementsToMerge);

    return result;
};

/*
 * Helper function to compare the equality of two arrays used by 'flatten' method
 *
 * NOTE: !! This is awkward code from the fellow who provide the flatten gist. I've replaced it with cleaner code
 *          based upon  http://stackoverflow.com/questions/7837456/comparing-two-arrays-in-javascript
 *
 * (c.f. https://gist.github.com/th507/5158907)
 *

function arrayEqual(a, b) {
    var i = Math.max(a.length, b.length, 1);
    while (i-- >= 0 && a[i] === b[i]);
    return (i === -2);
}
 */

function arrayEqual(a, b) {

    var i, l;

    // if either of the arrays are falsy value, return
    if (!a || !b) {
        return false;
    }

    // compare lengths - can save a lot of time
    if (a.length !== b.length) {
        return false;
    }

    for (i = 0, l = a.length; i < l; i += 1) {
        // Check if we have nested arrays
        if (a[i] instanceof Array && b[i] instanceof Array) {
            // recurse into the nested arrays
            if (!arrayEqual(a[i], b[i])) {
                return false;
            }
        } else if (a[i] !== b[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }

    return true;
}

/*
 * Flatten nested arrays into a single array
 *
 * (c.f. https://gist.github.com/th507/5158907)
 */

module.exports.flatten = function flatten(arr) {
    var r = [];
    while (!arrayEqual(r, arr)) {
        r = arr;
        arr = [].concat.apply([], arr);
    }
    return arr;
};