/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            let temp = nums[k];
            nums[k] = nums[i];
            nums[i] = temp;
            k++;
        }
    }
    return nums;
};