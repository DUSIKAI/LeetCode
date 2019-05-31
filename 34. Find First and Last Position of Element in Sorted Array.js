/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let a=0;
    let b=nums.length-1;
    let result=[-1,-1];
    while(a<b){
        var mid=Math.floor((a+b)/2);
        if(nums[mid]<target) a=mid+1;
        else b=mid;
    }
    if(nums[a]!=target) return result;
    result[0]=a;
    b=nums.length-1;
    while(a<b){
        mid=Math.ceil((a+b)/2);
        if(nums[mid]>target) b=mid-1;
        else a=mid;
    }
    result[1]=b;
    return result;
};