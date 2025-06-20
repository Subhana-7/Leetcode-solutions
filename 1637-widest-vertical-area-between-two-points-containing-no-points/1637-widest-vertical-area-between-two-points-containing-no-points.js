/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
    let xAxis = [];
    for (let i = 0; i < points.length; i++) {
        xAxis.push(points[i][0]);
    }
    xAxis.sort((a, b) => a - b);
    let diff = 0;
    for (let i = 1; i < xAxis.length; i++) {
        diff = Math.max(diff, xAxis[i] - xAxis[i - 1]);
    }
    return diff;
};