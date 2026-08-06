/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    while(true){
      let x = n;
      let product = 1;

        while(x > 0){
            product *= x %10;
            x = Math.floor(x/10);
        }

      if(product % t == 0)return n;
      n++;
    }
};