/**
 * Created by ptdecker on 2014-11-11
 */

/**
 * Problem Statement (from Interview Cake, http://www.interviewcake.com)
 *
 * You're working with an intern that keeps coming to you with JavaScript code that won't run because the braces,
 * brackets, and parentheses are off. To save you both some time, you decide to write a braces/brackets/parentheses
 * validator.
 *
 * Let's say:
 *      '(', '{', '[' are called "openers."
 *      ')', '}', ']' are called "closers."
 *
 * Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.
 *
 * Examples:
 *      "{ [ ] ( ) }" should return true
 *      "{ [ ( ] ) }" should return false
 *      "{ [ }" should return false
 */

"use strict";

var bracketValidator  = require('./bracketvalidator.js');

var symbolPairs = '{}[]()',
    string;

console.log("Problem Examples");
console.log("----------------");

string = '{ [ ] ( ) }';
console.log("'%s' %s", string, bracketValidator.validate(string, symbolPairs));

string = '{ [ ( ] ) }';
console.log("'%s' %s", string, bracketValidator.validate(string, symbolPairs));

string = '{ [ }';
console.log("'%s' %s", string, bracketValidator.validate(string, symbolPairs));

console.log();
console.log("Bonus Conditions");
console.log("---------------------");

string = '|like this|';
symbolPairs = '{}[]()||';
console.log("'%s' %s", string, bracketValidator.validate(string, symbolPairs));




console.log();
console.log("Additional Test Cases");
console.log("---------------------");

string = '';
console.log("'%s' %s", string, bracketValidator.validate(string, symbolPairs));

string = '[ ] ]';
console.log("'%s' %s", string, bracketValidator.validate(string, symbolPairs));

string = '[ [ ]';
console.log("'%s' %s", string, bracketValidator.validate(string, symbolPairs));

string = '';
symbolPairs = undefined;
console.log("'%s' %s", string, bracketValidator.validate(string, symbolPairs));
symbolPairs = '';
console.log("'%s' %s", string, bracketValidator.validate(string, symbolPairs));
symbolPairs = '[';
console.log("'%s' %s", string, bracketValidator.validate(string, symbolPairs));
symbolPairs = '[](';
console.log("'%s' %s", string, bracketValidator.validate(string, symbolPairs));

