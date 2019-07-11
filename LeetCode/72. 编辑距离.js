/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;
    
    if(n * m === 0){
        return n + m;
    }
    
    let d = new Array(); 
    for (let i = 0; i < m+1; i++) { 
        d[i] = new Array(); 
        for ( let j = 0; j < n+1; j++) { 
            d[i][j] = i + j; 
        }
    }
    
    for(let i=0;i<m;i++){
        d[i][0] = i;
    }
    for(let j=0;j<n;j++){
        d[0][j] = j;
    }
    
    for(let i=1;i<m+1;i++){
        for(let j=1; j<n+1; j++){
            let left = d[i-1][j] + 1;
            let down = d[i][j-1] + 1;
            let left_down = d[i-1][j-1];
            if(word1.charAt(i-1) !== word2.charAt(j-1))
                left_down += 1;
                d[i][j] = Math.min(left,Math.min(down,left_down));
        } 
    }
    return d[m][n];
};