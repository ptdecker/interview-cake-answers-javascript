/**
 * Created by ptdecker on 2014-12-31
 */

"use strict";

/*
 * Validate that brackets, braces, and parentheses all match
 */

module.exports.validate = function validate(string, pairs) {

    var symbolStack = [],       // Stack of opening symbols of representing symbol pairs that are unmatched
        poppedSymbol,           // Symbol popped of the stack
        poppedSymbolIndex,      // Index within the 'pairs' string of valid symbol pairs of the popped symbol
        matchingSymbolIndex,    // Index within the 'pairs' string of the current symbol within the string being evaluated
        index;                  // Index for position within the 'string' buffer

    // If no symbol set is defined or if it contains only one symbol as opposed to pair, throw error

    if (pairs === undefined || pairs.length < 2) {
        return new Error("At least one pair of symbols needs to be defined in the symbol set");
    }

    // If the symbol set contains an odd number of symbols then it doesn't contain a set of pairs, throw error

    if (pairs.length % 2) {
        return new Error("The set of valid symbols '" + pairs + "' is missing a symbol--it must contain pairs of symbols");
    }

    // Walk through all the characters in the string that needs to be validated. When an opening symbol of a given
    // symbol pair is encountered, push it onto the stack of unmatched pairs. When a closing symbol of a given pair is
    // found, pop its mate off the stack if possible and validate that it is as expected.

    for (index = 0; index < string.length; index += 1) {

        // See if the current character within the string to be validated is a symbol from our symbol pairs, if it is
        // not, then move on to the next character; otherwise, handle it accordingly

        matchingSymbolIndex = pairs.indexOf(string[index]);
        if (matchingSymbolIndex > -1) {

            // If the character matches one a symbol in the symbol set at an even location (0, 2, 4, etc.) then the
            // symbol by definition is an opening symbol so push it on the stack.

            if ((matchingSymbolIndex % 2) === 0) {
                symbolStack.push(string[index]);
            } else {

                // Otherwise, it is a closing symbol and needs to be paired with its mate. However, if the opening
                // symbol stack is empty, then we have a symbol mismatch, throw an error.

                if (symbolStack.length === 0) {
                    return new Error("Encountered a closing '" + string[index] + "' at offset " + index + " but missing a matching '" + pairs[pairs.indexOf(string[index]) - 1] + "'");
                }

                // Pull an opening symbol from the stack and validate that it is the matching mate to the closing
                // symbol currently being handled. If it isn't, then we have another mismatch error and need to throw it

                poppedSymbol = symbolStack.pop();
                poppedSymbolIndex = pairs.indexOf(poppedSymbol);
                if (pairs[poppedSymbolIndex + 1] !== string[index]) {
                    return new Error("Encountered a closing '" + string[index] + "' at offset " + index + " but expected '" + pairs[poppedSymbolIndex + 1] + "'");
                }

            }

        }
    }

    // When we're done inspecting all the characters in the input stream, if the opening symbol stack still contains
    // symbols then we have another mismatch condition, throw an error.

    if (symbolStack.length > 0) {
        return new Error("Reached the end of string but still expecting " + symbolStack.length + " more appropriate closing symbols");
    }

    // All is good -- String fully processed and everything matched.

    return true;

};
