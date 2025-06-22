/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
    let res = [], temp = ""
    for (let i = 0; i < s.length; i++) {
        if (temp.length === k) {
            res.push(temp)
            temp = "";
            temp += s[i]
        } else {
            temp += s[i];
        }
    }
    if (temp.length) {
        if (temp.length === k) {
            res.push(temp);
        } else {
            let cal = res.length - k;
            while (temp.length !== k) {
                temp += fill;
            }
            res.push(temp)
        }
    }
    return res;
};