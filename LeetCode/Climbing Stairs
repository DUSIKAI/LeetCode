/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let result=[1,2];
    for(var i=2;i<n;i++){
        result.push(result[i-1]+result[i-2]);
    }
    return result[n-1];
};
