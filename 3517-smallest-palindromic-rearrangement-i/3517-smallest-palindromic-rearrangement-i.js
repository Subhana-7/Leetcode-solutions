/**
 * @param {string} s
 * @return {string}
 */

var smallestPalindrome = function (s) {
    let mid = Math.floor(s.length / 2);
    let convertedString = s.slice(0, mid);
    let orderWise = convertedString.split('').sort().join('');
    if (s.length % 2 === 0) {
        return orderWise + orderWise.split('').reverse().join('');
    } else {
        return orderWise + s[mid] + orderWise.split('').reverse().join('');
    }
};