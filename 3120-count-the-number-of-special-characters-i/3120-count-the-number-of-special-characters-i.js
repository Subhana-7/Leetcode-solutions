/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let count = 0;
    let unique = new Set(word);
    for(let item of unique){
        if(unique.has(item.toUpperCase()) && unique.has(item.toLowerCase())) {
            count++
        }
    }
    return count/2;
};