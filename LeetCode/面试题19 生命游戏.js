/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    //八个方向的偏移量
    const idx = [0, 1, 0, -1, -1, -1, 1, 1];
    const jdx = [1, 0, -1, 0, 1, -1, 1, -1];

    //拷贝数组
    const CopyBoard = board.map(arr => {
        return [...arr];
    });

    //遍历每一个细胞
    for(let i = 0; i < CopyBoard.length; i++) {
        for(let j = 0; j < CopyBoard[0].length; j++) {
            //周边细胞统计
            let LiveBoard = 0;

            //八个方向走一遍
            for(let k=0; k<8; k++) {
                let x = i + idx[k];
                let y = j + jdx[k];

                //边界规避
                if(x < 0 || y < 0 || x >= CopyBoard.length || y >= CopyBoard[i].length) continue;

                //活细胞则技术+1
                LiveBoard += CopyBoard[x][y] ? 1:0;
            }

            if(LiveBoard < 2 || LiveBoard > 3) {
                board[i][j] = 0;
            } else if (LiveBoard <= 3 && CopyBoard[i][j]) {
                board[i][j] = 1;
            } else if(LiveBoard === 3 && !CopyBoard[i][j]) {
                board[i][j] = 1;
            }
        }
    }
};