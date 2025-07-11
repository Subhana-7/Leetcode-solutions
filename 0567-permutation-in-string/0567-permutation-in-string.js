/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const len1 = s1.length, len2 = s2.length;
    if (len1 > len2) return false;

    const s1_count = new Array(26).fill(0);
    const s2_count = new Array(26).fill(0);

    for (let i = 0; i < len1; i++) {
        s1_count[s1.charCodeAt(i) - 97]++;
        s2_count[s2.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < len2 - len1; i++) {
        if (arraysMatch(s1_count, s2_count)) return true;
        s2_count[s2.charCodeAt(i) - 97]--;
        s2_count[s2.charCodeAt(i + len1) - 97]++;
    }

    return arraysMatch(s1_count, s2_count);
};

function arraysMatch(a, b) {
    for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}