/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let occurance = [];
    for(let i = nums.length-1; i >= 0; i--){
        if(!occurance.includes(nums[i])&& nums[i] <=k) {
            occurance.push(nums[i])
        }
        if(occurance.length === k) return nums.length-i;
    }
};