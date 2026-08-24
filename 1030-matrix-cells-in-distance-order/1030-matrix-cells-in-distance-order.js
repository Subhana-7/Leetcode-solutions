/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {

    let arr = [];

    for (let r = 0; r < rows; r++) {

        for (let c = 0; c < cols; c++) {

            let dist = Math.abs(rCenter - r) + Math.abs(cCenter - c);
            arr.push({
                distance: dist,
                coor: [r, c]
            });
        }
    }

    arr.sort((a, b) => a.distance - b.distance);

    let res = arr.map(cell => cell.coor);
    return res;

};