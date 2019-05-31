/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let i=0;
    let j=0;
    let temp=0;
    let start=-1;
    while(i<s.length){
        if(j<p.length&&(s.charAt(i)===p.charAt(j)||p.charAt(j)==='?')){
            i++;
            j++;
        }else if(j<p.length&&p.charAt(j)==='*'){
            start=j;
            j++;
            temp=i;
        }else if(start!=-1){
            j=start+1;
            temp++;
            i=temp;
        }else{
            return false;
        }
    }
    while(j<p.length&&p.charAt(j)==='*'){
        j++;
    }
    return j == p.length;
};