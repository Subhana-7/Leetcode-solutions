/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    let arr = [...nums];
    let ops = 0;

    const isSorted = (a) => {
        for (let i = 1; i < a.length; i++)
            if (a[i] < a[i-1]) return false;
        return true;
    };

    while (!isSorted(arr)) {
        let minSum = Infinity, idx = 0;
        for (let i = 0; i + 1 < arr.length; i++) {
            let s = arr[i] + arr[i+1];
            if (s < minSum) {
                minSum = s;
                idx = i;
            }
        }
        arr[idx] = minSum;
        arr.splice(idx + 1, 1);
        ops++;
    }
    return ops;
};