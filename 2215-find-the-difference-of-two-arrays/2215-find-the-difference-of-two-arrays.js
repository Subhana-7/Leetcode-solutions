/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let answer = [];
    let num1 = [], num2 = [];
    let seen1 = {}, seen2 = {};
    for(let i = 0; i < nums1.length; i++){
        if(!nums2.includes(nums1[i]) && !seen1[nums1[i]]){
            num1.push(nums1[i]);
            seen1[nums1[i]] = true;
        }
    }
    for(let i = 0; i < nums2.length; i++){
        if(!nums1.includes(nums2[i]) && !seen2[nums2[i]]){
            num2.push(nums2[i]);
            seen2[nums2[i]] = true;
        }
    }
    answer.push(num1);
    answer.push(num2)
    return answer
};