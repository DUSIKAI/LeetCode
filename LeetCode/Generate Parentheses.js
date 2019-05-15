/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res=[];
    let path='';
    combination(n,n,path,res);
    return res;
};
function combination(left,right,path,res){
    if(left==0&&right==0){
        res.push(path);
        return;
    }
    if(left!=0){
        combination(left-1,right,path+'(',res);
    }
    if(right!=0&&left<right){
        combination(left,right-1,path+')',res);
    }
}