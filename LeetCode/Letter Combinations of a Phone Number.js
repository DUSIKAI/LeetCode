/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var arr={
        2:['a','b','c'],
        3:['d','e','f'],
        4:['g','h','i'],
        5:['j','k','l'],
        6:['m','n','o'],
        7:['p','q','r','s'],
        8:['t','u','v'],
        9:['w','x','y','z']
    };
    var item=[];
    for(var i=0;i<digits.length;i++){
        var num=digits[i];
        if(item==''){
            item=arr[num];
        }else{
            var list=[];
            for(var j=0;j<item.length;j++){
                for(var l=0;l<arr[num].length;l++){
                    list.push(item[j]+arr[num][l]);
                }
            }
            item=list;
        }
    }
    return item;
};