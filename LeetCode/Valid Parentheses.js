/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var newstr=[];
    for(var i=0;i<s.length;i++){
        if(s[i]=="("){
           newstr.push(")"); 
        }else if(s[i]=="["){
            newstr.push("]");
        }else if(s[i]=="{"){
            newstr.push("}");
        }else if(newstr.pop()!=s[i]){
            return false;
        }
    }
    return !newstr.length;
};
