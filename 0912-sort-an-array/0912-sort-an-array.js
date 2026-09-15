/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    const n = nums.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(nums, n, i)
    }
    for (i = n - 1; i > 0; i--) {
        [nums[0], nums[i]] = [nums[i], nums[0]]
        heapify(nums, i, 0)
    }
    return nums;
};

var heapify = function (arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest)
    }
}