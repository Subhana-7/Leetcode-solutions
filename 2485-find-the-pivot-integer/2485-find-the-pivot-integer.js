/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    function sum(start, end) {
        let num = 0;
        for (let i = start; i <= end; i++) {
            num += i;
        }
        return num;
    }
    for (let i = 1; i <= n; i++) {

        if (sum(1, i) == sum(i, n)) {
            return i;
        }
    }

    return -1;
};