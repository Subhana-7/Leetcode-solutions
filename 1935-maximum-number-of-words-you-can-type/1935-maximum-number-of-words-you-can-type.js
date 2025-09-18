/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    let arr = text.split(" ");
    let count = 0;
    for (let words of arr) {
        let flag = false;
        for (let char of words) {
            if (brokenLetters.includes(char)) {
                flag = true;
            }
        }
        if (!flag) {
            count++;
        }
    }
    return count;
};