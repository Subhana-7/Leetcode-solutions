/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let word = [...s1.split(' '),...s2.split(' ')];
    return word.filter(item => word.indexOf(item) === word.lastIndexOf(item));
};