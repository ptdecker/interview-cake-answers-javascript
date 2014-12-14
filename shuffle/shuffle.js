/**
 * Created by ptdecker on 2014-12-13
 */

/*
 * Card Deck Utilities
 */

"use strict";

// Deck constructor

function Deck(content) {
    this.deck = content;
}

/*
 * Return a random number that is between 'min' and 'max' inclusive
 *
 * (based on http://stackoverflow.com/a/363692)
 */

Deck.prototype.getRandom = function getRandom(min, max) {

    // Return a random number between 'min' and 'max' inclusive so long as min is less than max

    if (min < max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // If 'min' and 'max' are the same then just return that value

    if (min === max) {
        return Math.floor(min);
    }

    // Otherwise, we were passed a condition where 'max' is less than 'min' so throw an error

    return new Error("Function 'getRandom' was passed a minimum value greater than the passed maximum value");
};

/*
 * Swap two array elements ('i' and 'j')
 */

Deck.prototype.swap = function swap(i, j) {

    var size = this.deck.length,
        temp;

    // Check the boundaries of the array and throw an error if we're being asked to swap items outside these bounds

    if (i < 0 || i >= size || j < 0 || j >= size) {
        return new Error("Function 'swap' was passed array indexes outside of the size of deck array");
    }

    // If we're being asked to swap the same two elements, than there is nothing to do

    if (i === j) {
        return null;
    }

    // Otherwise, swap the two elements

    temp = this.deck[i];
    this.deck[i] = this.deck[j];
    this.deck[j] = temp;
    return null;

};

/*
 * Shuffle the deck using the Fisher-Yates in-place shuffle algorithm
 *
 * (c.f. http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
 */

Deck.prototype.shuffle = function() {
    var i;
    if (this.deck.length > 0) {
        for (i = (this.deck.length) - 1; i > 0; i -= 1) {
            this.swap(this.getRandom(0, i), i);
        }
    }
    return null;
};

module.exports = Deck;
