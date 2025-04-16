/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    let arr = (n === 0) ? [0] : [0,1];
    let i = 1;
    while(arr.length <= n-1){
        arr.push(arr[i]);
        arr.push(arr[i]+arr[i+1])
        i++
    }
    return Math.max(...arr);
};