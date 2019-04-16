/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(var len=digits.length-1;len>=0;len--){
        if(digits[len]<9){
            digits[len]++;
            return digits;
        }else if(digits[len] === 9 && len === 0){
            digits[len] = 0;
            digits.unshift(1);
            return digits;
        }else{
        digits[len]=0;
        }
        }
};
