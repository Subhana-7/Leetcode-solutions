/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    const d1 = Math.abs(z - x);
        const d2 = Math.abs(z - y);

        if (d1 < d2) return 1;
        else if (d1 > d2) return 2;
        else return 0;
};