/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
    const res = new Array(n).fill(0);
    const stack = [];
    let prevTime = 0;

    for (const log of logs) {
        const [idStr, type, timeStr] = log.split(":");
        const id = Number(idStr);
        const time = Number(timeStr);

        if (type === "start") {
            if (stack.length > 0) {
                res[stack[stack.length - 1]] += time - prevTime;
            }
            stack.push(id);
            prevTime = time;
        } else {
            res[stack.pop()] += time - prevTime + 1;
            prevTime = time + 1;
        }
    }

    return res;
};