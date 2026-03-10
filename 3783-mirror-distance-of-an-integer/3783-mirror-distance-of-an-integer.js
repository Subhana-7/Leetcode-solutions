/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function (n) {
    let reverse = 0, num = n;

    while (num > 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }
    return Math.abs(n - reverse);
};