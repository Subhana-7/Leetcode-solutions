/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
     var a=edges[0][0];
    var b=edges[0][1];
    var c=edges[1][0];
    var d=edges[1][1];

    if (a == c || a == d)
        return a;
    return b;
};