/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let R = matrix.length;
    let C = matrix[0].length;
    let rows = [];
    let cols = [];
    
    for(let i=0; i<R; i++) {
        for(let j=0; j<C; j++) {
            if(matrix[i][j]===0){
                rows.push(i);
                cols.push(j);
            }
        }
    }
    
    for(let i=0; i<R; i++) {
        for(let j=0; j<C; j++) {
            if(rows.indexOf(i)>=0||cols.indexOf(j)>=0){
                matrix[i][j]=0;
            }
        }
    }
    
    return matrix;
};