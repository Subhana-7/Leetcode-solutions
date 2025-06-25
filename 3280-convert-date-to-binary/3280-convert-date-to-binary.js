/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
    date = date.split('-');
    date = date.map(item => Number(item).toString(2));
    return date.join('-');
};