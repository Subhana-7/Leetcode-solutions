/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
    let s = [first];
    for (let i = 0; i < encoded.length; i++) {
        s.push(encoded[i] ^ s[i])
    }
    return s;
};