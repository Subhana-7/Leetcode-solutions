/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let store = {};
    for (let i = 0; i < arr.length; i++) {
        store[arr[i]] = (store[arr[i]] || 0) + 1;
    }
    let values = Object.values(store);
    let unique = new Set(values);
    return values.length === unique.size;
};