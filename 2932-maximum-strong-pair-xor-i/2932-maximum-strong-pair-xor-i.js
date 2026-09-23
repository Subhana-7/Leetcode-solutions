/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumStrongPairXor(nums) {
    let m = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j])) {
                m = Math.max(m, nums[i] ^ nums[j]);
            }
        }
    }
    return m;
}