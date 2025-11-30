/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function (nums) {
    let n = nums.length;
    let breakIndex = -1;
    let breaks = 0;
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            breaks++;
            breakIndex = i;
        }
    }
    if (breaks > 1) return -1;

    if (breaks === 0) return 0;
    let shifts = n - (breakIndex + 1);
    let rotated = [];
    for (let i = 0; i < n; i++) {
        rotated[(i + shifts) % n] = nums[i];
    }
    for (let i = 0; i < n - 1; i++) {
        if (rotated[i] > rotated[i + 1]) {
            return -1;
        }
    }
    return shifts;
};