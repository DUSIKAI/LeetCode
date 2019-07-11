/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m==1||n==1) return 1;
    let temp = new Array(n).fill(1);
    
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            temp[j] = temp[j-1] + temp[j];
        }
    }
    
    return temp[n-1];
};