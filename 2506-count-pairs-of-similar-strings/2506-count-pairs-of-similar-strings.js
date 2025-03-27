/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    let count = 0;
    let str = words.map(word => [...new Set(word)].sort().join(""));
    for(let i = 0; i < str.length; i++){
        for(let j = i+1; j < str.length; j++){
            if(str[i] === str[j]){
                count++
            }
        }
    }
    return count;
};