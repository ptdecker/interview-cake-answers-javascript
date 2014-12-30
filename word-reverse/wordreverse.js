/**
 * Created by ptdecker on 2014-12-29
 */

/*
 * Reverse Words in a String
 */

"use strict";


function reverse3(array, start, len) {
    var temp,
        i, j, k;
    for (i = 0; (i + start) < (start + Math.floor(len) / 2); i += 1) {
        j = (i + start);
        k = (start + len - i - 1);
        if (k > j) {
            temp = array[j];
            array[j] = array[k];
            array[k] = temp;
        }
    }
}

function reverse2(source) {

    var temp,
        i,
        leftStart = 0,
        rightEnd = source.length - 1;

    for (i = 0; i < Math.floor(source.length / 2); i += 1) {
        temp = source[i];
        source[i] = source[source.length - i - 1];
        source[source.length - i - 1] = temp;
        if (source[i] === ' ' && (i - 1) > leftStart) {
            reverse3(source, leftStart, (i - leftStart));
            leftStart = (i + 1);
        }
        if (source[source.length - i - 1] === ' ' && (source.length - i) < rightEnd) {
            reverse3(source, source.length - i, rightEnd - source.length + i + 1);
            rightEnd = (source.length - i - 2);
        }
    }
    if (leftStart < rightEnd) {
        reverse3(source, leftStart, rightEnd - leftStart + 1);
    }
}


module.exports.reverse = function reverse(source) {
    var mutableTempArray = source.split("");
    reverse2(mutableTempArray);
    return mutableTempArray.join("");
};
