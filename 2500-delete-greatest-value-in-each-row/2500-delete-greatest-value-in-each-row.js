/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
    grid.forEach(row => row.sort((a, b) => a - b));
    let total = 0;

    while (grid[0].length) {
        let column = [];
        for (let row of grid) column.push(row.pop());
        total += Math.max(...column);
    }
    return total;
};