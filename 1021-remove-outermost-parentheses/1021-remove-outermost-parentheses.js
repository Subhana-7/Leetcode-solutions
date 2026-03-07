/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let temp = "", level = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            level++;
            temp += level > 1 ? s[i] : "";
        } else {
            temp += level > 1 ? s[i] : "";
            level--;
        }
    }
    return temp
};