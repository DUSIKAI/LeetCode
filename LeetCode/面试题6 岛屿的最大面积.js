/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let x = grid.length;
    let y = grid[0].length;
    let max = 0;

    for(let i = 0; i < x; i++) {
        for(let j = 0; j < y; j++) {
            if(grid[i][j] == 1) {
                max = Math.max(max, cntArea(grid, i, j, x, y));
            } 
        }
    }
    
    return max;
};

let cntArea = (grid, i, j, x, y) => {
    if(i<0 || j<0 || i>=x || j>=y || grid[i][j] == 0) return 0;
    let cnt = 1;
    grid[i][j] = 0;

    cnt += cntArea(grid, i+1, j, x, y) ;
    cnt += cntArea(grid, i-1, j, x, y) ;
    cnt += cntArea(grid, i, j+1, x, y) ;
    cnt += cntArea(grid, i, j-1, x, y) ;

    return cnt;
}