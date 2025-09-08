/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
    const containZero = (num) => num.toString().includes('0');

    for (let i = 1; i <= n; i++) {
        if (!containZero(i) && !containZero(n - i)) {
            return [i, n - i];
        }
    }
};