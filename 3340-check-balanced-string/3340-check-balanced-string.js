/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
    let a = num.split('')
    let odd = 0
    let even = 0
    for (let i = 0; i < a.length; i++) {
        if (i % 2 == 0) {
            even += Number(a[i])
        } else {
            odd += Number(a[i])
        }
    }
    return odd === even
};