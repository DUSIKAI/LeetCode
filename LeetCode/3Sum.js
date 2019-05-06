/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>{
        return a-b;
    });
    var result=[];
    var len=nums.length
    for(var i=0;i<len;i++){
        if(nums[i]===nums[i-1]) continue;
        var k=i+1,j=len-1;
        var tag=0-nums[i]
        while(k<j){
            if(nums[k]+nums[j]===tag){
                result.push([nums[i],nums[k],nums[j]]);
                while(k<j&&nums[k]===nums[k+1]) k++;
                while(k<j&&nums[j]===nums[j-1]) j--;
                k++;
                j--;
            }else if(nums[j]+nums[k]<tag){
                ++k;
            }else{
                --j;
            }
        }
    }
    return result;
};