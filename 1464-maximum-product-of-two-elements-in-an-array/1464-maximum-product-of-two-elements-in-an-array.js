/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let a = nums.sort((a,b) => b-a);
    return (a[0]-1)*(a[1]-1)

};