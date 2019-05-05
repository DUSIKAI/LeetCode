/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var len=s.length;
    var twoRows=numRows*2-2;
    var str='';
    if(len==0||numRows<=1) return s;
    for(var i=0;i<numRows;i++){
        for(var j=i;j<len;j+=twoRows){
            str=str.concat(s.charAt(j));
            if(i!=0&&i!=numRows-1&&j-2*i+twoRows<len){
                str=str.concat(s.charAt(j-2*i+twoRows))
            }
        }
    }
    return str;
};