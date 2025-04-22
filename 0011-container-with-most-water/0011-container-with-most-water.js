/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let water = 0;
    let i = 0;
    let j = height.length - 1
    while (i < j) {
        const h = Math.min(height[i], height[j]);
        const w = j - i;
        const area = h * w;
        water = Math.max(water, area);
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return water
};