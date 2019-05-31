/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result=0;
    let n=height.length;
    let left=0;
    let leftHeight=0;
    let right=n-1;
    let rightHeight=0;
    for(let i=0;i<n;i++){
        if(height[left]<height[right]){
            leftHeight=Math.max(leftHeight,height[left]);
            result+=leftHeight-height[left];
            left++;
        }else{
            rightHeight=Math.max(rightHeight,height[right]);
            result+=rightHeight-height[right];
            right--;
        }
    }
    return result;
};