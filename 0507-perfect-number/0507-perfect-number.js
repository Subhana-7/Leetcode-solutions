/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    let val = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            val += i;
        }
    }
    return val === num;
};