/**
 * Created by ptdecker on 2018-07-07
 */

/**
 * Problem Statement (from Interview Cake, http://www.interviewcake.com)
 *
 * Write a recursive function for generating all permutations of an input string. Return them as a set.
 *
 * Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version.
 * To start, assume every character in the input string is unique. Your function can have loops—it just
 * needs to also be recursive.
 *
 * NOTE: Solved without using any loops
 */

function rsp(str, result, prefix, index) {

    // If function was called with a string alone, set up the array which will contain the
    // result set and call the function again passing an empty array and an empty string
    // prefix.  When we regain control return the array to the caller.
    if (typeof result === "undefined") {
        const result = [];
        rsp(str, result, "");
        return result;
    }

    // If index is undefined, then se need to call ourself again with a zero index setting
    // up a recursive walk through the string.  Once we regain control, we return to the
    // caller without making another recursive call.
    if (typeof index === "undefined") {
        rsp(str, result, prefix, 0);
        return;
    }

    // If the string is zero length, then we have one permutation so we push it onto our
    // result set array and return to the caller without making another recursive call.
    // This is the ultimate 'base case' as Interview Cake calls it that halts the recursion
    // once we have our answer.
    if (str.length === 0) {
        result.push(prefix);
        return;
    }

    // This is the meat of the algorithm and it involves two recursive calls to itself.  If
    // the character we are working on ('index') is less than the length of the string then
    // we have work to do.  The first thing we do is we call ourselves with a shorter string
    // that does not contain the character we are currently working on and, instead, adds that
    // character to the 'prefix' which contains the partial left-hand permutation of the
    // current permutation we are calculating.  The function then does its thing recursively
    // to determine all the permutations of the smaller string.  Once that is done, then we
    // call ourselves again but this time looking at the next character in the string we
    // are working on by advancing our index.
    if (index < str.length) {
        rsp(str.replace(str[index], ''), result, prefix + str[index]);
        rsp(str, result, prefix, (index + 1));
        return;
    }

    // If we made it here, then we have nothing to do exept return back one layer in the
    // recursive call stack.  This represents the secondary base case we have to have to
    // stop the walk through the characters of a given permutation.
}

console.log(rsp("cat"));
