/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    for(let i = 0; i < num/2; i++){
        if(i * i == num || num == 1 || num == 4) {
            return true;
        }
    }
    return false;
};