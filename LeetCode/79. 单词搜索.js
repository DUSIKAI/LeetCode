/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if (board.length === 0) return false;
    let rlen = board.length;
    let clen = board[0].length;
    let visited = [];
    
    for (let i = 0; i < rlen; i++) {
        visited[i] = [];
        for (let j = 0; j < clen; j++) {
            visited[i][j] = 0;
        }
    }
    
    for (let i = 0; i < rlen; i++) {
        for (let j = 0; j < clen; j++) {
            if (word.charAt(0) === board[i][j] && backtrack(i, j, 0,word,visited,board)) return true;
        }
    }
    
    return false;
    
    function backtrack(i,j,idx,word,visited,board){
        if(idx === word.length) return true;
        if(i >= board.length || i<0 || j >= board[0].length || j<0 || board[i][j] != word.charAt(idx) || visited[i][j])
            return false;
        visited[i][j] = true;
        if(backtrack(i + 1, j, idx + 1, word, visited, board) || backtrack(i - 1, j, idx + 1, word, visited, board) || backtrack(i,             j+ 1, idx + 1, word, visited, board) || backtrack(i, j - 1, idx + 1, word, visited, board))
            return true;
        visited[i][j] = false;
        return false;
    }
};