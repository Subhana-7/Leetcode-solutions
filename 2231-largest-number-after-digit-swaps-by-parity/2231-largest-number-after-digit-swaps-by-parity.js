/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
    let res = [];
    let item = String(num).split('');

    let odd = item.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
    let even = item.filter((num) => num % 2 === 0).sort((a, b) => a - b);

    for (let i = 0; i < item.length; i++) {
        if (item[i] % 2 === 0) {
            res.push(even.pop())
        } else {
            res.push(odd.pop())
        }
    }
    return Number(res.join(''));
};