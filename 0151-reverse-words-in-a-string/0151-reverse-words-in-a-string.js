/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(" ");
    let result = [];
    for(let i = words.length-1; i >=0; i--){
        if(words[i]) result.push(words[i])
    }
    return result.join(' ')
};