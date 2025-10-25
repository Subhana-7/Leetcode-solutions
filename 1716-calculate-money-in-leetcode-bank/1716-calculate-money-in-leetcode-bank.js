/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    const w = Math.floor(n / 7);
    const r = n % 7;
    const fullWeeksSum = w * 28 + 7 * (w * (w - 1) / 2);
    const remSum = r * (1 + w) + (r * (r - 1) / 2);
    return fullWeeksSum + remSum;
};