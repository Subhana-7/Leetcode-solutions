/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
    let result = []
    function pushFromTo(start, end) {
        while (start <= end && start <= n) {
            result.push(start);
            pushFromTo(start * 10, start * 10 + 9);
            start++;
        }
    }
    pushFromTo(1, 9);
    return result;
};