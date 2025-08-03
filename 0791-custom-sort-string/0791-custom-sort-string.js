/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
    const countChar = {};
    for (const char of order) countChar[char] = 0;

    for (const char of s) {
        if (countChar[char] !== undefined) countChar[char]++;
    }

    let sort = '';

    for (const char of order) sort += char.repeat(countChar[char]);

    for (const char of s) {
        if (!order.includes(char)) sort += char;
    }

    return sort;
};