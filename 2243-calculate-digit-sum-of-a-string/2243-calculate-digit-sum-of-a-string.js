/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
    while (s.length > k) {
        let newStr = "";
        for (let i = 0; i < s.length; i += k) {
            let group = s.slice(i, i + k);
            let sum = 0;

            for (let ch of group) {
                sum += Number(ch);
            }
            newStr += String(sum);
        }
        s = newStr;
    }
    return s;
};