/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    while(start<=end) {
        let mid = ((start + end) / 2) ^ 0;
        if(nums[mid] === target) return true;
        if(nums[mid] < nums[end]) {
            if(target === nums[end]){
                return true;
            } else if(target > nums[mid] && target < nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }else if(nums[mid] > nums[start]) {
            if(target === nums[start]){
                return true;
            } if(target > nums[start] && target < nums[mid]){
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if(nums[mid] === nums[start]) start++;
            if(nums[mid] === nums[end]) end--;
        }
    }
    return false;
};