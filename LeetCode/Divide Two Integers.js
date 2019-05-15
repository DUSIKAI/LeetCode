/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {  
    let i=0;
    let sign=1;
    let mul=1;
    if(dividend===divisor) return 1;
    if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
        sign = -1;
    }
    dividend=Math.abs(dividend);
    divisor=Math.abs(divisor);
    let num=divisor;
    while (dividend >= num) {
        if (dividend > (num + num)) {
            num += num;
            mul += mul;
        }
        dividend -= num;
        i += mul;
    }
    while (dividend >= divisor) {
        dividend -= divisor;
        i += 1;
    }
     if (sign == 1 && i > (Math.pow(2, 31) - 1)) {
        return Math.pow(2, 31) - 1;
    } else if (sign == -1 && i < -Math.pow(2, 31)) {
        return -Math.pow(2, 31);
    }
    if (sign == 1) {
        return i;
    } else {
        return -i;
    }
};