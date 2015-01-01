/**
 * Created by ptdecker on 2014-11-11
 */

/**
 * Problem Statement (from Interview Cake, http://www.interviewcake.com)
 *
 * "You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the
 * insane profit margins. You end up hitting the jackpot, breaking into the world's largest privately owned stock of
 * cakes—the vault of the Queen of England.
 *
 * While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type.
 *
 * Each type of cake has a weight and a value, stored in tuples with two positions:
 *     - An integer representing the weight of the cake in kilograms
 *     - An integer representing the monetary value of the cake in British pounds
 *
 * For example:
 *      - weighs 7 kilograms and has a value of 160 pounds
 *             (7, 160)
 *      - weighs 3 kilograms and has a value of 90 pounds
 *             (3, 90)
 *
 * You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.
 *
 * Write a function max_duffel_bag_value() that takes an array of cake tuples and a weight capacity, and returns the
 * maximum monetary value the duffel bag can hold.
 *
 * For example:
 *
 *     cake_tuples = [(7, 160), (3, 90), (2, 15)]
 *     capacity    = 20
 *
 *     max_duffel_bag_value(cake_tuples, capacity)
 *
 *    # returns 555 (6 of the middle type of cake and 1 of the last type of cake)
 *
 *    Weights and values may be any non-negative integer. Yes, it's weird to think about cakes that weigh nothing or
 *    duffel bags that can't hold anything. But we're not just super mastermind criminals—we're also meticulous about
 *    keeping our algorithms flexible and comprehensive."
 */

"use strict";

var cakeThief  = require('./dynamicukp.js');

var cakeTuples = [[7, 160], [3, 90], [2, 15]];
var capacity   = 20;

// Test 1: Happy Path
var result = cakeThief.dynamicUKP(cakeTuples, capacity);
console.log("Happy Path");
console.log("  cakeTuples: ", JSON.stringify(cakeTuples));
console.log("  capacity  : ", capacity);
console.log("  result    : ", result, (result === 555) ? " (pass)" : " (fail)");

// Test 2: Zero capacity
capacity   = 0;
result = cakeThief.dynamicUKP(cakeTuples, capacity);
console.log("Zero Capacity");
console.log("  cakeTuples: ", JSON.stringify(cakeTuples));
console.log("  capacity  : ", capacity);
console.log("  result    : ", result, (result === 0) ? " (pass)" : " (fail)");

// Test 3: Negative capacity
capacity   = -10;
result = cakeThief.dynamicUKP(cakeTuples, capacity);
console.log("Negative Capacity");
console.log("  cakeTuples: ", JSON.stringify(cakeTuples));
console.log("  capacity  : ", capacity);
console.log("  result    : ", result, (result === 0) ? " (pass)" : " (fail)");

// Test 4: Zero weight and Zero Value
capacity   = 20;
cakeTuples.push([0, 0]);
result = cakeThief.dynamicUKP(cakeTuples, capacity);
console.log("A Zero Weight and Value Item");
console.log("  cakeTuples: ", JSON.stringify(cakeTuples));
console.log("  capacity  : ", capacity);
console.log("  result    : ", result, (result === 555) ? " (pass)" : " (fail)");

// Test 5: Non-zero weight and Zero Value
capacity   = 20;
cakeTuples.pop();
cakeTuples.push([10, 0]);
result = cakeThief.dynamicUKP(cakeTuples, capacity);
console.log("A Zero Value Item");
console.log("  cakeTuples: ", JSON.stringify(cakeTuples));
console.log("  capacity  : ", capacity);
console.log("  result    : ", result, (result === 555) ? " (pass)" : " (fail)");

// Test 6: Zero weight and Non-zero Value
capacity   = 20;
cakeTuples.pop();
cakeTuples.push([0, 10]);
result = cakeThief.dynamicUKP(cakeTuples, capacity);
console.log("A Zero Weight Item");
console.log("  cakeTuples: ", JSON.stringify(cakeTuples));
console.log("  capacity  : ", capacity);
console.log("  result    : ", result, (result === 555) ? " (pass)" : " (fail)");