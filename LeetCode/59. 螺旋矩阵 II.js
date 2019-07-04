/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let aboveRow=0;
    let belowRow=n-1;
    let leftCol=0;
    let rightCol=n-1;
    let num=1;
    let res = [];
    for(let i=0;i<n;i++){
        res[i] = [];
        for(let j=0;j<n;j++){
            res[i][j] = 0;
        }
    }
    while(aboveRow<=belowRow&&leftCol<=rightCol){
        //从左到右
        for(let i=leftCol;i<=rightCol;i++){
            res[aboveRow][i]=num;
            num++;
        }
        aboveRow++;
        //从上到下
        for(let i=aboveRow;i<=belowRow;i++){
            res[i][rightCol]=num;
            num++;
        }
        rightCol--;
        //从右到左
        for(let i=rightCol;i>=leftCol;i--){
            res[belowRow][i]=num;
            num++;
        }
        belowRow--;
        //从下到上
        for(let i=belowRow;i>=aboveRow;i--){
            res[i][leftCol]=num;
            num++;
        }
        leftCol++;
    }
    return res;
};