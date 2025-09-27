/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
    let num1 = num.split("")
    while (num1.length) {
        if (num1[num1.length - 1] == '0') {
            num1.pop();
        } else {
            return num1.join("");
        }
    }
};