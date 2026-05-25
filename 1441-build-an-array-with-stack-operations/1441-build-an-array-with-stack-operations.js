/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    let res = [], temp = []
    for (let i = 1; i <= n; i++) {
        res.push("Push");
        temp.push(i)
        if (!target.includes(i)) {
            res.push("Pop")
            temp.pop()
        }
        const same =
            temp.length === target.length &&
            temp.every((val, index) => val === target[index]);
        if (same) break;
    }

    return res;
};