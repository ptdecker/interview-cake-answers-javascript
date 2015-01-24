/**
 * Created by ptdecker on 2015-01-22
 */

/**
 * Stock Tools
 */

"use strict";

module.exports.getBestSpread = function getBestSpread(data) {

    var minPriceTuple = data[0],
        maxPriceTuple = data[0],
        maxProfit = 0,
        currentPrice,
        time;

    for (time = 0; time < data.length; time += 1) {

        currentPrice = data[time][1];

        // minPrice = Math.min(minPrice, currentPrice);
        if (currentPrice < minPriceTuple[1]) {
            minPriceTuple = data[time];
        }

        // maxProfit = Math.max(maxProfit, currentPrice - minPrice);
        if ((currentPrice - minPriceTuple[1]) > maxProfit) {
            maxPriceTuple = data[time];
            maxProfit = currentPrice - minPriceTuple[1];
        }

    }

    return {
        minPrice : minPriceTuple,
        maxPrice : maxPriceTuple,
        maxProfit: maxProfit
    };

};