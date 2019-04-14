/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var obj={};
    for(var i=0;i<nums.length;i++){
        var a=target-nums[i];
        if(obj[a]!==undefined){
            return [obj[a],i];
        }
        obj[nums[i]]=i;
    }
    return [];
};