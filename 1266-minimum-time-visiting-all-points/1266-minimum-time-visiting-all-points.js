/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let time=0
    for(let i=1;i<points.length;i++){
        let dx=Math.abs(points[i][0]- points[i-1][0])
        let dy=Math.abs(points[i][1]-points[i-1][1])
        time+=Math.max(dx,dy)
    }
    return time
};