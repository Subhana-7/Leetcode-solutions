/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
    let min1 = Math.abs(x - z);
    let min2 = Math.abs(y - z);

    if (min1 < min2) {
        return 1;
    } else if (min1 > min2) {
        return 2;
    } else {
        return 0;
    }
};