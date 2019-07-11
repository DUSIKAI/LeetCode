/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n = matrix.length;
    if(n===0) return false;
    let m = matrix[0].length;
    
    let temp=0;
    
    for(let i=0; i<n; i++){
        if(target<=matrix[i][m-1]){
            temp = i;
            break;
        }
    }
    
    for(let j=0;j<m;j++){
        if(target===matrix[temp][j]){
            return true;
        }
    }
    
    return false;
};