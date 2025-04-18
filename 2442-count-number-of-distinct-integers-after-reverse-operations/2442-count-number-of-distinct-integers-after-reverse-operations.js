/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
    let set = new Set(nums);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 10) {
            set.add(nums[i])
        } else {
            let reverseNum = parseInt(nums[i].toString().split('').reverse().join(''));
            set.add(reverseNum);
        }
    }
    return set.size;

};