/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
    const [[ax, ay], [bx, by], [cx, cy]] = points;
    return (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by)) === 0 ? false : true;

};