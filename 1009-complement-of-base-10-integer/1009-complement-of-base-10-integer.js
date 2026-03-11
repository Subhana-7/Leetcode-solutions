/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
    let binary = n.toString(2);
    let complement = "";
    for (let i = 0; i < binary.length; i++) {
        binary[i] === "0" ? complement += "1" : complement += "0";
    }
    let decimal = parseInt(complement, 2);
    return decimal;
};