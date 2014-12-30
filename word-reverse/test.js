/**
 * Created by ptdecker on 2014-12-29
 */

/**
 * Problem Statement (from Interview Cake, http://www.interviewcake.com)
 *
 * You're working on a secret team solving coded transmissions. Your team is scrambling to decipher a recent message,
 * worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but
 * all the words are backwards! Your colleagues have handed off the last step to you. Write a function reverse_words()
 * that takes a string message and reverses the order of the words in place.
 *
 * For example:
 *
 * message = 'find you will pain only go you recordings security the into if'
 * reverse_words(message)
 * # returns: 'if into the security recordings you go only pain will you find'
 *
 * When writing your function, assume the message contains only letters and spaces, and all words are separated by one
 * space. Strings are immutable in Python, so we can't use Python for in-place operations on a string. We'll use Ruby
 * instead.
 *
 * If you're not comfortable coding in a language with mutable strings, you could split the string into a list of
 * characters, do the in-place word reversal on that list, and re-join that list into a string before returning it. But
 * keep in mind that this isn't technically "in-place," and the list of characters would cost O(n) additional space!
 */

"use strict";

var wordReverse  = require('./wordreverse.js');

var message = 'find you will pain only go you recordings security the into if',
    temp;

console.log("Happy Path");
console.log("----------");
console.log(message);
console.log(wordReverse.reverse(message));

console.log("Test Cases");
console.log("----------");
console.log("'' -> ", "'"+wordReverse.reverse("")+"'");           // Empty string
console.log("a -> ", wordReverse.reverse("a"));         // One letter
console.log("ab -> ", wordReverse.reverse("ab"));       // Even number of letters
console.log("abc -> ", wordReverse.reverse("abc"));     // Odd number of letters
console.log("abc def -> ", wordReverse.reverse("abc def")); // Two words with word break in middle
console.log("abcd efg -> ", wordReverse.reverse("abcd efg")); // Two words with word break right of middle
console.log("abc defg -> ", wordReverse.reverse("abc defg")); // Two words with word break left of middle
console.log("abc def ghi -> ", wordReverse.reverse("abc def ghi"));  // Three words odd
console.log("abc defg hij -> ", wordReverse.reverse("abc defg hij")); // Three words even
console.log("abcde fg hij -> ", wordReverse.reverse("abcde fg hij")); // Three words even with shift

