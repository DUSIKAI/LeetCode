/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result=[[]];
    if(!nums.length) return[];
    for(let i=0;i<nums.length;i++){
        let len=result.length;
        for(let j=0;j<len;j++){
            let oldArr=result.shift();
            for(let l=0;l<=oldArr.length;l++){
                let newArr=oldArr.slice();
                newArr.splice(l,0,nums[i]);
                result.push(newArr);
            }
        }
    }
    return result;
};