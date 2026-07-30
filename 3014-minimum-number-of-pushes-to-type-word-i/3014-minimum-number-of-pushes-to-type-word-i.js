/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
    let num = word.length, keyPress = 0, flag = 1
    while (num !== 0) {
        if (num <= 8) {
            return keyPress + (num * flag)
        }
        num -= 8
        keyPress += 8 * flag
        flag++
    }
};