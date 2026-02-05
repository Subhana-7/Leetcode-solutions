/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
    let str = String(x);
    let num = 0;

    for (let s of str) {
        num += Number(s);
    }

    if (x % num === 0) return num;
    return -1;
};