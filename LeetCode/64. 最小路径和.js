/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let dp = [];
    let m = grid.length;
    let n = grid[0].length;
    
    while(dp.push(new Array(n+1).fill(Number.MAX_VALUE))<=m);
    dp[0][1] = 0;
    dp[1][0] = 0;
    
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            dp[i][j] = grid[i-1][j-1] + Math.min(dp[i-1][j],dp[i][j-1]);
        }
    }
    
    return dp[m][n];
};