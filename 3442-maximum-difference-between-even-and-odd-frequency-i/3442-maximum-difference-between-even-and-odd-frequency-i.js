/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let freq = {};
    for(let item of s){
        freq[item] = (freq[item] || 0) + 1;
    }
    let values = Object.values(freq);
    let evens = values.filter(count => count % 2 === 0).sort();
    let odds = values.filter(count => count % 2 !== 0).sort();
    
    let maxOdd = odds.length ? Math.max(...odds) : 0;
    let maxEven = evens.length ? Math.min(...evens) : 0;
    return maxOdd - maxEven;
};