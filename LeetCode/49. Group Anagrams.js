/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var group={},res=[],key=[],str=[];
    for(let i=0;i<strs.length;i++){
        str=strs[i];
        key=restring(str);
        if(group.hasOwnProperty(key)){
            group[key].push(str);
        }else{
            group[key]=[str];
        }
    }
    for(item in group){
    if(group.hasOwnProperty(item)){
        res.push(group[item].sort());
    }
    }
    return res;
};
function restring(strs){
    var arr=strs.split("");
    arr.sort();
    return arr.join("");
}