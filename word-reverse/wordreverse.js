/**
 * Created by ptdecker on 2014-12-29
 */

/*
 * Reverse Words in a String
 */

"use strict";

/*
 * Swap the words in an array
 *
 * When passed only an array, 'swap' will swap all of the words in the array. 'Swap' can also be called by passing it
 * an array plus indices indicating a sub-portion of the array and the 'sub' defined as true. This calling method is
 * used by 'swap' itself recursively to correct word order.
 */

function swap(source, leftIndex, rightIndex, sub) {

    // Set the left and right starting index points if swap was called without them already defined. This will happen
    // when swap is called for the first time with just an array. When it is recursively called to correct the letter
    // order of words, the indices will be defined and sub should be 'true'.

    leftIndex  = (leftIndex  !== undefined ? leftIndex : 0);
    rightIndex = (rightIndex !== undefined ? rightIndex : source.length - 1);

    var temp,
        leftWordStartIndex = leftIndex,
        rightWordStartIndex = rightIndex;

    for (leftIndex, rightIndex; leftIndex < rightIndex; leftIndex += 1, rightIndex -= 1) {

        // Swap the two array items pointed to by the left and right indices

        temp = source[leftIndex];
        source[leftIndex] = source[rightIndex];
        source[rightIndex] = temp;

        // Working from the left side of the array, if we have come to a word break then backtrack and fix the
        // letter ordering of the word by recursively calling swap again with indices set.

        if (source[leftIndex] === ' ') {
            swap(source, leftWordStartIndex, leftIndex - 1, true);
            leftWordStartIndex = (leftIndex + 1);
        }

        // Working from the right side of the array, if we have come to a word break then backtrack and fix the
        // letter ordering of the word by recursively calling swap again with indices set.

        if (source[rightIndex] === ' ') {
            swap(source, rightIndex + 1, rightWordStartIndex, true);
            rightWordStartIndex = (rightIndex - 1);
        }
    }

    // We may have one remaining word to fix. If so, fix it. But, don't attempt this if this is a recursively
    // called version of swap otherwise we will infinitely recurse.

    if (!sub && leftWordStartIndex < rightWordStartIndex) {
        swap(source, leftWordStartIndex, rightWordStartIndex, true);
    }
}


module.exports.reverse = function reverse(source) {
    var mutableTempArray = source.split("");
    swap(mutableTempArray);
    return mutableTempArray.join("");
};
