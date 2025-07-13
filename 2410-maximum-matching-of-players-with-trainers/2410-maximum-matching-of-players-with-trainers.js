/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function (players, trainers) {
    players.sort((a, b) => a - b), trainers.sort((a, b) => a - b);
    let i = players.length - 1, j = trainers.length - 1, res = 0;
    while (i >= 0 && j >= 0) {
        if (players[i] <= trainers[j]) {
            res++;
            i--;
            j--;
        }
        else i--;
    }
    return res;
};