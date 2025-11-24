/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
const prefixesDivBy5 = (nums) => {
    let val = 0;

    for (let i = 0; i < nums.length; i++) {
        val = ((val << 1) + nums[i]) % 5;
        nums[i] = val === 0;
    }

    return nums;
};