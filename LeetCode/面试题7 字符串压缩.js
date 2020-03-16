/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    let res = '';
    let arr = S.split("");

    for(let i=0, j=0; j < arr.length; j++) {
        if(arr[i] !== arr[j+1]) {
            res += arr[i] + (j + 1 - i);
            i = j + 1;
        }
    }

    return (S.length > res.length) ? res : S;
};