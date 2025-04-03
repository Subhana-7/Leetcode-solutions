/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for(let i = 0; i < ransomNote.length; i++){
        if(!magazine.includes(ransomNote[i])) return false;
        magazine = magazine.replace(ransomNote[i], "");
    }
    return true;
};