/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var aArr=a.split("").reverse();
    var bArr=b.split("").reverse();
    var aLen=a.length;
    var bLen=b.length;
    var carry=0;
    var result=[];
    var Maxlen=Math.max(aLen,bLen);
    for(i=0;i<Maxlen;i++){
        var itemSum=+(aArr[i]||0)+ +(bArr[i]||0)+carry;
        if(itemSum===0){
            result[i]=0;
            carry=0;
        }else if(itemSum===1){
            result[i]=1;
            carry=0;
        }else if(itemSum===2){
            result[i]=0;
            carry=1;
        }else{
            result[i]=1;
            carry=1;
        }
    }
    if(carry===1) result.push(1);
    return result.reverse().join("");
};
