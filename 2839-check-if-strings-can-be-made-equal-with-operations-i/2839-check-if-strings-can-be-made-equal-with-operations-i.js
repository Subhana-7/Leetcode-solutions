/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function canBeEqual(s1, s2) {
    const a1 = s1.split('');
    for (let i = 0; i < 2; i += 1) {
        if (a1[i] !== s2[i]) {
            [a1[i], a1[i + 2]] = [a1[i + 2], a1[i]];
        }
    }
    return a1.every((c, i) => c === s2[i]);
}