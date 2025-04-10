/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let seen = {};
    let unique = [];
    for (let i = 0; i < nums.length; i++) {
        if (!seen[nums[i]]) {
            seen[nums[i]] = true;
            unique.push(nums[i]);
        }
    }
    unique.sort((a, b) => a - b);

    if(unique.length === 0) return 0;

    let maxCount = 1;
    let count = 1;

    for (let i = 1; i < unique.length; i++) {
        if (unique[i] == unique[i - 1] + 1) {
            count++
            maxCount = Math.max(maxCount, count);
        } else {
            count = 1;;
        };
    }
    return maxCount;
};