/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var result="1";
    for(var i=1;i<n;i++){
        var repactcount=1;
        var str="";
        for(var j=0;j<result.length;j++){
            if(result[j]===result[j+1]){
                repactcount++;
            }else{
                str+=repactcount+result[j];
                repactcount=1;
            }
        }
        result=str;
    }
    return result;
};