/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    let map = new Map(), res = 0, lastTime = -1;
    for (let i = 0; i < position.length; i++) {
        map.set(position[i], speed[i]);
    }
    const sortedPos = [...map.keys()].sort((a, b) => b - a);

    for (let i = 0; i < position.length; i++) {
        let time = (target - sortedPos[i]) / map.get(sortedPos[i]);

        if (time > lastTime) {
            res++;
            lastTime = time;
        }
    }
    return res;
};