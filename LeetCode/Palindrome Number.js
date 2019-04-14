/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var newnum=0;
    if(x<0) return false;
    if(x%10===0&&x!==0) return false;
    while(x>newnum){
        newnum=newnum*10+x%10;
        x=parseInt(x/10|0);
    }
    return x === newnum || x === (newnum/10|0);
};