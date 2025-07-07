/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
    let low = 0, high = s.length, res = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "I") res.push(low++);
        else res.push(high--);
    }
    res.push(low);
    return res;
};