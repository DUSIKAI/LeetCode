/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    solve(board);
    return board;
};


function solve(board) {
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            let ch=board[i][j];
            if(ch==='.'){
                for(let k=1;k<=9;k++){
                    if(isValue(i,j,board,''+k)){
                        board[i][j]=''+k;
                        if(solve(board)){
                            return true;
                        }else{
                            board[i][j]='.';
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}
function isValue(row,col,board,t){
    for(let i=0;i<9;i++){
        let ch=board[row][i];
        if(ch===t) return false;
        ch=board[i][col];
        if(ch===t) return false;
        ch=board[Math.floor(row/3)*3+Math.floor(i/3)][Math.floor(col/3)*3+i%3];
        if(ch===t) return false;
    }
    return true;
}