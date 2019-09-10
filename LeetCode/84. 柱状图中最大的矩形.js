/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let result = [];
    let max = 0;
    let i = 0;
    
    for(i; i<heights.length; i++){
        while(result.length > 0 && heights[result[result.length - 1]] > heights[i]) {
            let index = result.pop();
            let width = result.length ? i-result[result.length-1] - 1 : i;
            max = Math.max(max,width * heights[index]);
        }
        result.push(i);
    } 
    
    while(result.length > 0){
        let index = result.pop();
        let width = result.length ? i-result[result.length - 1] -1 : i;
        max = Math.max(max,width * heights[index]);
    }
    
    return max;
};
/*
暴力法
let maxarea = 0;
    for(let i=0;i<heights.length;i++){
        let minheight = 2147483647;
        for(let j=i;j<heights.length;j++){
            minheight = Math.min(minheight,heights[j]);
            maxarea = Math.max(maxarea,minheight * (j - i + 1));
        }
    }
    return maxarea;
*/