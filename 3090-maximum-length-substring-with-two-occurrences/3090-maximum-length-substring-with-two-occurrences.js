/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
    const freq = new Array(26).fill(0);
    let start = 0;
    let maxlen = 0;

    for (let end = 0; end < s.length; end++) {
        freq[s.charCodeAt(end) - 97]++;

        while (freq[s.charCodeAt(end) - 97] > 2) {
            freq[s.charCodeAt(start) - 97]--;
            start++;
        }

        maxlen = Math.max(maxlen, end - start + 1);
    }

    return maxlen;
};