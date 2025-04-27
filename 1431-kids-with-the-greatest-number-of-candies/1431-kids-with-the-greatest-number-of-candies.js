/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let result = [];
    let largest = -Infinity;
    for (let i = 0; i < candies.length; i++) {
        if (largest < candies[i]) {
            largest = candies[i];
        }
    }
    for (let i = 0; i < candies.length; i++) {
        let total = candies[i] + extraCandies;
        if (largest <= total) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
};