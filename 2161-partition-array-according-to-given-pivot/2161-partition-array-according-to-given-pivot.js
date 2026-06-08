/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    let smaller = [], larger = [], pivotArr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            smaller.push(nums[i])
        } else if (nums[i] > pivot) {
            larger.push(nums[i])
        } else {
            pivotArr.push(nums[i])
        }
    }
    return [...smaller, ...pivotArr, ...larger];
};