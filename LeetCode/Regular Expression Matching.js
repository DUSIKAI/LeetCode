/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var reg=new RegExp('^'+p+'$');//^,$分别表示字符串起始和结尾
    return reg.test(s);
};