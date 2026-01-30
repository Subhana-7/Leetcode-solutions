/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
    let count = 0, water = capacity;
    for (let i = 0; i < plants.length; i++) {
        if (water < plants[i]) {
            count += (2 * i + 1);
            water = capacity;
        } else {
            count += 1;
        }
        water -= plants[i]
    }
    return count;
};