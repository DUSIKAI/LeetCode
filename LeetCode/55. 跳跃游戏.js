/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums){
    //从后往前推
    let n=nums.length;
    let start=n-2;
    let end=n-1;
    while(start>=0){
        if(start+nums[start]>=end) end=start;
        start--;
    }
    return end<=0;
};


/*从前往后跳
var canJump = function(nums) {
    let start=0;
    let end=0;
    while(start<=end&&end<nums.length-1){
        end=Math.max(end,start+nums[start]);
        start++;
    }
    return end>=nums.length-1;
};
*/