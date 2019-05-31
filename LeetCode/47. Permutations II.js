/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if(!nums.length) return [];
    nums.sort((a, b) => a - b);
    let result=[[]];
    for(let i=0;i<nums.length;i++){
        let len=result.length;
        for(let j=0;j<len;j++){
            let oldArr=result.shift();
            if(i>0&&nums[i]===nums[i-1]){
                var k=oldArr.lastIndexOf(nums[i]);
            }else{
                k=0;
            }
            for(;k<=oldArr.length;k++){
                if(k===oldArr.length||nums[i]!==oldArr[k]){
                    let newArr=oldArr.slice();
                    newArr.splice(k,0,nums[i]);
                    result.push(newArr);
                }
            }
        }
    }
    return result;
};