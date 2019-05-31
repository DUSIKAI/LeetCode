/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n=nums.length;
    let i=0;
    while(i<n){
        let c=nums[i];
        if(c>0&&n<n+1&&c!=i+1&&nums[c-1]!==nums[i]){
            swap(nums,c-1,i);
        }else{
            i++;
        }
    }
    for(let i=0;i<n;i++){
        if(nums[i]!=i+1) return i+1;
    }
    return n+1;
};
function swap(nums,i,j){
    let temp=nums[i];
    nums[i]=nums[j];
    nums[j]=temp;
}