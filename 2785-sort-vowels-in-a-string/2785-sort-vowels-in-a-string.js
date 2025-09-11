/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const sArr = s.split('');
    const sortedVowel = sArr.filter((c) => vowels.has(c)).sort();

    let result = '', vowelIndex = 0;
    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) {
            result += sortedVowel[vowelIndex++];
        } else {
            result += s[i];
        }
    }
    return result;
};