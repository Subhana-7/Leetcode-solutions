/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let s= new Set()
    let duplicate=[]
    for(let i=0;i<nums.length;i++){
        if(s.has(nums[i])) duplicate.push(nums[i])
        else{
            s.add(nums[i])
        }
    }
    return duplicate
};