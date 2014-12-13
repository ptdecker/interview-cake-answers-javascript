/**
 * Created by ptdecker on 2014-12-13
 */

/**
 * Problem Statement (from Interview Cake, http://www.interviewcake.com)
 *
 * Write a function for doing an in-place (http://en.wikipedia.org/wiki/In-place_algorithm) shuffle of an array.
 *
 * The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up
 * in each spot in the final array. Assume that you have a function get_random(floor, ceiling) for getting a random
 * integer that is >=floor and <=ceiling.
 */

"use strict";

var Deck = require('./Shuffle.js');

var deck = new Deck([
        "AS", "1S", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "JS", "QS", "KS",
        "AD", "1D", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "JD", "QD", "KD",
        "AC", "1C", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "JC", "QC", "KC",
        "AH", "1H", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "JH", "QH", "KH"
    ]);

console.log("Not Shuffled ", deck);

deck.shuffle();

console.log("Shuffled ", deck);