/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let totalUnits = 0;
    for (let [numberOfBoxes, unitsPerBox] of boxTypes) {
        let boxesToTake = Math.min(numberOfBoxes, truckSize);
        totalUnits += boxesToTake * unitsPerBox;
        truckSize -= boxesToTake;
    }
    return totalUnits;
};