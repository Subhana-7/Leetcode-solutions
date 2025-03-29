/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const sum1 = s.split('').reduce((acc,curr) => acc+curr.charCodeAt(0),0);
    const sum2 = t.split('').reduce((acc,curr) => acc+curr.charCodeAt(0),0);
    return String.fromCharCode(sum2-sum1);
};