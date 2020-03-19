/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = new Map();
    let cnt = 0;
    let center = 0;

    for(let i of s) {
        map.set(i, map.has(i) ? map.get(i)+1 : 1);
    }

    for(let [k,j] of map) {
        if(j % 2 == 0) {
            cnt += j;
        } else {
            cnt += j-1;
            center = 1;
        }
    }

    return center+cnt;
};