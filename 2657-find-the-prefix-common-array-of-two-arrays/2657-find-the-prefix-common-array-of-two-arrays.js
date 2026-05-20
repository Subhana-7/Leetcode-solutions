/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let n = A.length;

    let freq = new Array(n + 1).fill(0);
    let ans = new Array(n);

    let cnt = 0;

    for(let i = 0; i < n; i++) {

        freq[A[i]]++;
        if(freq[A[i]] === 2) cnt++;

        freq[B[i]]++;
        if(freq[B[i]] === 2) cnt++;

        ans[i] = cnt;
    }

    return ans;
};