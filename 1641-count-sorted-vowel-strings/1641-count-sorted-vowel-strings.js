/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
    let ans = 1;

    for (let i = 1; i <= 4; i++) {
        ans = ans * (n + i) / i;
    }

    return ans;
};