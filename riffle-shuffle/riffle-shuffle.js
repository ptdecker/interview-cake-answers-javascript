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
 * Clear all the elements of an array quickly
 *
 * (c.f. http://stackoverflow.com/a/1232046/3893444)
 */

function fastClear(a) {
    while(a.length > 0) {
        a.pop();
    }
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

Deck.prototype.shuffle = function shuffle() {
    var i;
    if (this.deck.length > 0) {
        for (i = (this.deck.length) - 1; i > 0; i -= 1) {
            this.swap(this.getRandom(0, i), i);
        }
    }
    return null;
};

/*
 * Shuffle the deck using a riffle shuffle
 */

Deck.prototype.riffleShuffle = function riffleShuffle() {

    var sliceAt = this.getRandom(0, this.deck.length),
        half1 = this.deck.slice(0, sliceAt),
        half2 = this.deck.slice(sliceAt, this.deck.length),
        i;

    fastClear(this.deck);

    // Store the two halves of the deck used for the riffle shuffle. This is only needed to fulfill the riffleShuffle
    // test from InterviewCake

    this.half1 = half1.slice(0);
    this.half2 = half2.slice(0);

    while(half1.length > 0 || half2.length > 0) {
        for (i = this.getRandom(0, half1.length); i > 0; i -= 1) {
            this.deck.push(half1.shift());
        }
        for (i = this.getRandom(0, half2.length); i > 0; i -= 1) {
            this.deck.push(half2.shift());
        }
    }

};

/*
 * Test to see if a deck has been riffle shuffled given two known halves
 */

Deck.prototype.isRiffleShuffled = function isRiffleShuffled() {

    // If the two halves of the deck used to create the riffle shuffled deck haven't been saved, then we cannot
    // complete the riffle shuffle test as defined by the InterviewCake problem.

    if (this.half1 === undefined || this.half2 === undefined) {
        return false;
    }

    // If the size of the deck is less than the size of the two halves then cards are missing and we have an errors

    if (this.half1.length + this.half2.length !== this.deck.length) {
        return new Error("'isRiffleShuffled' detected less cards in the shuffled collection then in the two halves");
    }

    var i = 0,  // index pointer for shuffled deck
        j = 0,  // index pointer for deck half one
        k = 0;  // index pointer for deck half two

    for (i = 0; i < this.deck.length; i += 1) {
        if (this.deck[i] !== this.half1[j] && this.deck[i] !== this.half2[k]) {
            return false;
        }
        if (this.deck[i] === this.half1[j]) {
            j += 1;
        } else {
            k += 1;
        }
    }

    return true;

};

module.exports = Deck;
