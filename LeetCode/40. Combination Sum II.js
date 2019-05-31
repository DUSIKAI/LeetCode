/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result=[];
    let temp=[];
    candidates.sort((b,a)=>b-a)
    helper(result,temp,candidates,target,0);
    return result;
};
function helper(result,temp,candidates,target,start){
    
    for(let i=start;i<candidates.length&&candidates[i]<=target;i++){
        if(i===start||candidates[i]!=candidates[i-1]){
        temp.push(candidates[i]);
        helper(result,temp,candidates,target-candidates[i],i+1);
        temp.length-=1;
        }
    }
    if(target===0){
        result.push([...temp]);
        return;
    }
}