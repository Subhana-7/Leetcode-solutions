/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let count = 0;
    for(let i = low; i <= high; i++){
        let str = i.toString();
        if(str.length%2 === 0){
            let half = str.length/2;
            let sum1 = 0, sum2 = 0;
            for(let i = 0; i < half; i++){
                sum1 += Number(str[i]);
                sum2 += Number(str[i+half]);
            }
            if(sum1 > 0 && sum2 >0 && sum1 === sum2){
                count++
            }
        }
    }
    return count;
};