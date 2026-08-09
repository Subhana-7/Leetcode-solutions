/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    let count = {};

    for (let num of nums) {
        if (count[num] === undefined) {
            count[num] = 0;
        }
        count[num]++;
    }


    let rows = 0;

    for (let num in count) {
        rows = Math.max(rows, count[num]);
    }


    let result = [];

    for (let i = 0; i < rows; i++) {
        result.push([]);
    }
    for (let num in count) {
        let frequency = count[num];

        for (let i = 0; i < frequency; i++) {
            result[i].push(Number(num));
        }
    }

    return result;
};