/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let count = 0;
    let sorted = nums.sort((a,b) => a-b);
    let i = 0;
    let j = sorted.length-1;
    while(i < j){
        if(sorted[i] + sorted[j] === k){
            count++
            i++
            j--;
        }else if(sorted[i] + sorted[j] < k){
            i++;
        }else{
            j--;
        }
    }
    return count;
};