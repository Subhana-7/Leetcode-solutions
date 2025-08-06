/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (A) {
    return A[0].map((_, i) => A.map(b => b[i]));
};