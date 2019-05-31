/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n===0) return 1;
    
    if(n===1) return x;
    
    if(n===-1) return 1/x;
    
    if(n%2===0) {
        let res = myPow(x,n/2);
        return res*res;
    } else{
        return x * myPow(x, n - 1);
    } 
};