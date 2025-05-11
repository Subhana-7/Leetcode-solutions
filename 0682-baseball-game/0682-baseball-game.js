/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let res = [];
    for (let op of operations) {
        switch (op) {
            case 'C':
                res.pop();
                break
            case 'D':
                res.push(2 * res[res.length - 1]);
                break;
            case '+':
                res.push(res[res.length - 2] + res[res.length - 1]);
                break;
            default:
                res.push(parseInt(op));
        }
    }
    return res.reduce((acc, curr) => acc + curr, 0)
};