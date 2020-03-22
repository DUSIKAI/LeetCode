/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    if(A.length == 0) return 0;
    A.sort((a,b) => a-b);
    let cnt = 0;
    for(let i = 0; i<A.length-1; i++) {
        if(A[i] >= A[i+1]) {
            cnt += (A[i] - A[i+1] + 1);
            A[i+1] = A[i] + 1;
        }
    }

    return cnt;
};