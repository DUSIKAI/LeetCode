/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let a=0;
    let b=nums.length-1;
    while(a<b){
        var mid=Math.floor((a+b)/2);
        if(nums[mid]<nums[b]) b=mid;
        else a=mid+1;
    }
    let i=a;
    a=target<nums[0]?i:0;
    b=target<=nums[nums.length-1]?nums.length-1:i;
    while(a<=b){
        mid=Math.floor((a+b)/2);
        if (nums[mid] < target) a = mid + 1;
        else if (nums[mid] === target) return mid;
        else b = mid - 1;
    }
    return -1;
};
//旋转之后的数组如果中间的数小于最右边的数，则右半段是有序的，若中间数大于最右边数，则左半段是有序的