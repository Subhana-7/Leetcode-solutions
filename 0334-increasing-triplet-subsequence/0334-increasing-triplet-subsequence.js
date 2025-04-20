/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    for(let i = 1; i < nums.length; i++){
        let prev = nums[i-1];
        let curr = nums[i];
        let next = nums[i+1];
        if(prev < curr && curr < next){
            return true
        }
    }
    return false;
};