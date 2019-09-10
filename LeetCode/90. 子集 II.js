/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var result =[[]];     // 结果数组
    for (var num of nums.sort()) {
        var temp = [];      // 每个num，添加进result每个元素后,形成的二维数组
        for (var already of result) {
            var element = already.concat(num);  // element：temp的每个元素，即result里的每个元素加上num
            if (!arrayHasElement(result, element)) {  // 若element不存在与result中，添加element。
                temp.push(element);
            }
        }
    result = result.concat(temp);
  }
  return result;
    
    function arrayHasElement(array,element) {
        for(let el of array) {
            if(el.length === element.length) {
                for(let index in el) {
                    if (el[index] !== element[index]) {
                        break;
                    }
                    if (index == (el.length - 1)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
};