/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return String(x) === x.toString().split('').reverse().join('');
};