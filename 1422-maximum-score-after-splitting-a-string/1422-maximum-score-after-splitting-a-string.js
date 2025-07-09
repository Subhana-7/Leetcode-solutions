/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    let max = -Infinity
    for (let i = 1; i < s.length; i++) {
        let zero = s.slice(0, i).split('')
        let one = s.slice(i).split('')
        let a = zero.filter(num => num == '0').length
        let b = one.filter(num => num == '1').length
        if (a + b > max) max = a + b
    }
    return max
};