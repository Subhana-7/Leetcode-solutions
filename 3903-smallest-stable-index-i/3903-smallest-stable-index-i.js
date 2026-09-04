/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
    const n = nums.length;

    const vmax = new Array(n);
    const vmin = new Array(n);

    vmax[0] = nums[0];
    vmin[n - 1] = nums[n - 1];

    for (let i = 1; i < n; i++) {
        vmax[i] = Math.max(vmax[i - 1], nums[i]);

        const idx = n - 1 - i;
        vmin[idx] = Math.min(vmin[idx + 1], nums[idx]);
    }

    for (let i = 0; i < n; i++) {
        if (vmax[i] - vmin[i] <= k) {
            return i;
        }
    }

    return -1;
};