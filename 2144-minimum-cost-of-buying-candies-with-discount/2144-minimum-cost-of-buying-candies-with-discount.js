/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    cost.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < cost.length; i++) {
        if (i % 3 !== 2) sum += cost[i];
    }
    return sum;
};