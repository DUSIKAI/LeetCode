/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len=s.length;
    let result;
    let i,l,j;
    let dp=Array(len).fill(0).map(x=>Array(len).fill(0));
    if(len<=1){
        return s
    }
    for(i = 0;i<len;i++){
        dp[i][i] = 1
        result = s[i]
    }
    for ( L = 2; L <= len; L++) {
        for ( i = 0; i <= len - L; i++) {
                j = i + L - 1;
            if(L == 2 && s[i] == s[j]) {
                dp[i][j] = 1;
                result = s.slice(i, i + L);
            }else if(s[i] == s[j] && dp[i + 1][j - 1] == 1) {
                dp[i][j] = 1
                result = s.slice(i, i + L);
            }

        }
    }
    return result;
};