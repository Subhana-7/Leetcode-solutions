/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let r = [];
    let s1 = s.split(" ");
    for (let i = 0; i < s1.length; i++) {
        r.push(s1[i].split("").reverse().join(""));
    }
    return r.join(" ");
};