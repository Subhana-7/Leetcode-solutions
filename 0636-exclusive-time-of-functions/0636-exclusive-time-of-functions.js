/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
    let arr = Array(n).fill(0);
    let stack = [];
    for (let log of logs) {
        let [id, x, time] = log.split(':');
        if (x === 'start') {
            stack.push([+id, +time]);
        } else {
            let [tid, ttime] = stack.pop();
            let val = (+time - ttime) + 1;
            arr[tid] += val;
            if (stack.length) {
                arr[stack[stack.length - 1][0]] -= val;
            }
        }
    }
    return arr;
};