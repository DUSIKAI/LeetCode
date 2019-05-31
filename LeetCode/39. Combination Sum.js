/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result=[];
    let temp=[];
    helper(result,temp,candidates,target,0);
    return result;
};
function helper(result,temp,candidates,target,start){
    
    for(let i=start;i<candidates.length;i++){
        if(candidates[i]<=target){
        temp.push(candidates[i]);
        helper(result,temp,candidates,target-candidates[i],i);
        temp.length-=1;
        }
    }
    if(target===0){
        result.push([...temp]);
        return;
    }
}