/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 0) return [];
    let res = [];
    
    for(let i =1; i <= numRows; i++) {
        res.push([]);
        for(let j = 0; j<i; j++) {
            if(j==0 || j==i-1) {
                res[i-1].push(1);
            }else {
                let t = res[i-2][j-1]+res[i-2][j];
                res[i-1].push(t);
            }
        }
    }
    return res;
};