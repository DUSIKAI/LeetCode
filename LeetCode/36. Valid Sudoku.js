/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {   
    for(let i=0;i<9;i++){
        var colNums=[];
        var rowNums=[];
        var cubeNums=[];
        for(let j=0;j<9;j++){
            //检查每一行之中是否有重复元素
            var ch = board[i][j];
            if (ch !== '.') {
                if (rowNums.indexOf(ch) > -1) return false;
                rowNums.push(ch);
            }
            //检查每一列之中是否有重复元素
              ch = board[j][i];
            if (ch !== '.') {
                if (colNums.indexOf(ch) > -1) return false;
                colNums.push(ch);
            }
            //检查每个3x3的方阵中是否有重复元素
            var row = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            var col = i % 3 * 3 + j % 3;
            // console.log(i, j, row, col);
            ch = board[row][col];
            if (ch !== '.') {
                if (cubeNums.indexOf(ch) > -1) return false;
                cubeNums.push(ch);
            }
        }
    }
    return true;
};