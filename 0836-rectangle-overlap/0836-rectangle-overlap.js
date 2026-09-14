/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
const isRectangleOverlap = ([x1, y1, x2, y2], [X1, Y1, X2, Y2]) =>
    x1 < X2 && X1 < x2 && y1 < Y2 && Y1 < y2;