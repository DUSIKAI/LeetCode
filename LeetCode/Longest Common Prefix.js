/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var firstStr=strs[0];
    var result='';
    if(!strs.length){
        return result;
    }
    for(var i=0;i<firstStr.length;i++){
        for(var j=0;j<strs.length;j++){
            if(firstStr[i]!=strs[j][i]){
                return result;
            }
        }
        result+=firstStr[i];
    }
    return result;
};
