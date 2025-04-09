/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function(s) {
    const reversed = s.split("").reverse().join("");
    for(let i = 0; i < s.length; i++){
        const substring = s[i] + s[i+1];
        if(reversed.includes(substring)) return true;
    }
    return false;
};