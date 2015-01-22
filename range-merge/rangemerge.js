/**
 * Created by ptdecker on 2015-01-22
 */

/*
 * Merge Ranges
 **/

"use strict";

module.exports.rangemerge = function rangemerge(array) {

    var merged = [],
        element = [],
        i;

    if (array.length === 0) {
        return [];
    }

    array.sort(function(a, b) {
        return (a[0] > b[0]);
    });

    i = 0;
    element = array[0];
    do {
        i += 1;
        if (i < array.length && element[1] >= array[i][0]) {
            if (element[1] < array[i][1]) {
                element[1] = array[i][1];
            }
        } else {
            merged.push(element);
            element = array[i];
        }
    } while (i < array.length);

    return merged;
};