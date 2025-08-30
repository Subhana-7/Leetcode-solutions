/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    let ansArr = [], index = 0;
    while (index < arr.length) {
        ansArr.push(arr.slice(index, index + size));
        index += size;
    }
    return ansArr;
};
