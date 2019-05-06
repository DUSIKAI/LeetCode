/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxarea=0;
    let r=height.length-1;
    let l=0;
    while(l<r){
        maxarea=Math.max(maxarea,(Math.min(height[r],height[l]))*(r-l))
        if(height[l]<height[r]){
            l++;
        }else{
            r--
        }
    }
    return maxarea;
    
    
    /*暴力法破解
    let maxarea=0;
    for(let i=0;i<height.length;i++){
        for(let j=0;j<height.length;j++){
            maxarea=Math.max(maxarea,(Math.min(height[i],height[j])*(j-i)));
        }
    }
    return maxarea;*/
};