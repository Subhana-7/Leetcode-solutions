/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let vowel = 'aeiou';
    let count = 0;
    for (let i = 0; i < k; i++) {
        if (vowel.includes(s[i])) {
            count++;
        }
    }
    let maxCount = count;
    for (let i = k; i <= s.length; i++) {
        if (vowel.includes(s[i])) count++;
        if (vowel.includes(s[i - k])) count--;
        maxCount = Math.max(maxCount, count);
    }
    return maxCount;
};