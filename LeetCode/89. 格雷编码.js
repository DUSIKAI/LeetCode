/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    if(n === 0) return [0];
    let arr = [0,1];
    helper(arr, 2);
    for(let i=0; i<arr.length; i++) {
        arr[i] = parseInt(arr[i], 2);
    }
    return arr;
    
    function helper(arr, cur) {
        if(cur > n) return;
        let len = arr.length;
        for(let i=len-1; i>=0; i--) {
            arr.push("1" + arr[i]);
            arr[i] = "0" + arr[i];
        }
        helper(arr, cur+1);
    }
};