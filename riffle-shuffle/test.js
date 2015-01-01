/**
 * Created by ptdecker on 2014-12-13
 */

/**
 * Problem Statement (from Interview Cake, http://www.interviewcake.com)
 *
 * Write a function for doing an in-place (http://en.wikipedia.org/wiki/In-place_algorithm) shuffle of an array.
 *
 * The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up
 * in each spot in the final array. Assume that you have a function getRandom(floor, ceiling) for getting a random
 * integer that is >=floor and <=ceiling.
 */

"use strict";

var Deck = require('./riffleshuffle.js');

var deck1 = new Deck([
         1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13,
        14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
        27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
        40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52
    ]);

var deck2 = new Deck([
    1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13,
    14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52
]);

console.log("Regular Shuffle Test");
console.log("Not Shuffled ", deck1);
deck1.shuffle();
console.log("Shuffled ", deck1);
console.log("Is Riffle Shuffled? ", (deck2.isRiffleShuffled() ? "Yes" : "No"));

console.log("Riffle Shuffle Test");
console.log("Not Shuffled ", deck2);
deck2.riffleShuffle();
console.log("Shuffled ", deck2);
console.log("Is Riffle Shuffled? ", (deck2.isRiffleShuffled() ? "Yes" : "No"));
