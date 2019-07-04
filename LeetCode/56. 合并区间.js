/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length == 1 || intervals.length == 0) return intervals;
    intervals.sort((a, b) => a[0]-b[0]);
    let left=0,right=0,i=0;
    let res=[];
    while(i<intervals.length){
        left=intervals[i][0];
        right=intervals[i][1];
        while(i<intervals.length-1&&intervals[i+1][0]<=right){
            right=Math.max(right,intervals[i+1][1]);
            i++;
        }
        res.push([left,right]);
        i++;
    }
    return res;
};
/*
var merge = function(intervals) {
    if(intervals.length == 1 || intervals.length == 0) {
        return intervals;
    }
    intervals = intervals.sort(function(a, b) {
        return a.start - b.start;
    });
    var result = [];
    var i = 0;
    for(var j = 1;j < intervals.length; j++) {
        if(intervals[j].start <= intervals[i].end) {
            intervals[i].end = Math.max(intervals[j].end, intervals[i].end);
        } else {
            result.push(intervals[i]);
            i = j;
        }
    }

    result.push(intervals[i]);
    
    return result;
}
 
*/
