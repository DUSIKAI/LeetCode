/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //当前元素个数
    let count = 1;
    //当前元素
    let number = nums[0];

    for(let i = 1; i < nums.length; i++) {
        // 如果当前元素没有了，就选取下一个元素作为候选元素
        if(count == 0) {
            number = nums[i];
            count = 1;
            continue;
        }

        if(nums[i] != number) {
            count--;
        }else {
            count++;
        }
    }
    return number;   
};
/* 暴力法
var halfCount = nums.length/2;

    for(let num = 0; num <= nums.length; num++) {     
        var count = 0;

        for(let elem = 0; elem <= nums.length; elem++) {
            if(nums[elem] == nums[num]) {
                count += 1;
            }
        }

        if(count > halfCount) {
            return nums[num];
        }
    }

    return -1;
*/
/* 排序法
function sortNumber(a, b) {
        return a-b;
    }
    const halfCount = Math.ceil(nums.length/2);
    nums.sort(sortNumber);
    return nums[halfCount - 1];
*/