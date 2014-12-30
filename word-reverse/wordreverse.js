/**
 * Created by ptdecker on 2014-12-29
 */

/*
 * Reverse Words in a String
 */

"use strict";


function subSwap(array, start, len) {
    var temp,
        i, j, k;
    for (i = 0; (i + start) < (start + Math.floor(len / 2)); i += 1) {
        j = (i + start);
        k = (start + len - i - 1);
        if (k > j) {
            temp = array[j];
            array[j] = array[k];
            array[k] = temp;
        }
    }
}

function swap(source) {

    var temp,
        leftIndex,
        rightIndex,
        length = source.length - 1,
        middle = Math.floor(length / 2),
        leftWordStartIndex = 0,
        rightWordStartIndex = length;

    for (leftIndex = 0; leftIndex <= middle; leftIndex += 1) {
        rightIndex = length - leftIndex;
        if (rightIndex > leftIndex) {
            temp = source[leftIndex];
            source[leftIndex] = source[rightIndex];
            source[rightIndex] = temp;
        }
        if (source[leftIndex] === ' ') {
            subSwap(source, leftWordStartIndex, leftIndex - leftWordStartIndex);
            leftWordStartIndex = (leftIndex + 1);
        }
        if (source[rightIndex] === ' ') {
            subSwap(source, rightIndex + 1, rightWordStartIndex - rightIndex);
            rightWordStartIndex = (rightIndex - 1);
        }
    }
    if (leftWordStartIndex < rightWordStartIndex) {
        subSwap(source, leftWordStartIndex, rightWordStartIndex - leftWordStartIndex + 1);
    }
}


module.exports.reverse = function reverse(source) {
    var mutableTempArray = source.split("");
    swap(mutableTempArray);
    return mutableTempArray.join("");
};
