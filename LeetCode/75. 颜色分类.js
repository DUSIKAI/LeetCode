/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let p0 = 0;
    let p2 = nums.length-1;
    let temp = 0;
    let curr = 0;
    
    while(curr<=p2){
        if(nums[curr] === 0){
            temp = nums[p0];
            nums[p0] = nums[curr];
            nums[curr] = temp;
            curr++;
            p0++;
        }else if(nums[curr] === 2){
            temp = nums[p2];
            nums[p2] = nums[curr];
            nums[curr] = temp;
            p2--;
        }else{
            curr++;
        }
    }
    return nums;
};