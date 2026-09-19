/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
    let sortedCosts = costs.sort((a, b) => a - b);
    let count = 0;
    let total = coins;
    for (let i = 0; i < sortedCosts.length; i++) {
        let temp = total - sortedCosts[i];
        if (temp >= 0) {
            count++;
            total -= sortedCosts[i]
        }
        if (total == 0 || sortedCosts[i] > coins) {
            break;
        }
    }
    return count;
};