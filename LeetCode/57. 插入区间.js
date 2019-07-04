/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (intervals.length === 0) {
     return [newInterval]
   }
   if (newInterval.end < intervals[0].start) {
     return [newInterval, ...intervals]
   }
   if (newInterval.start > intervals[intervals.length - 1].end) {
     return [...intervals, newInterval]
   }
   let result = [],
     inserted = false;
     for (const interval of intervals) {
     // interval 与 newInterval 不需要合并 [4,6] [1,2] or [4,6] [7,8]
         if (interval.start > newInterval.end) {
             if (!inserted) {
                 result.push(newInterval);
                 inserted = true;
                 }
         result.push(interval);
         } else if (interval.end < newInterval.start) {
             result.push(interval);
         } else {
         // interval 与 newInterval 需要合并
             newInterval.start = Math.min(interval.start, newInterval.start);
             newInterval.end = Math.max(interval.end, newInterval.end);
         }
     }
     if (!inserted) {
     result.push(newInterval);
     }
     return result;
 };
 /**
     intervals.push(newInterval);
     intervals.sort((a,b)=> a[0]-b[0]);
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
 */