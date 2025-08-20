/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let val = fn(arr[i], i);
        newArr.push(val);
    }
    return newArr;
};