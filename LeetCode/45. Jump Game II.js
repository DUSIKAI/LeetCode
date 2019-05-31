/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let res = 0, n = nums.length, last = 0, cur = 0;
        for (let i = 0; i < n - 1; ++i) {
            cur = Math.max(cur, i + nums[i]);
            if (i == last) {
                last = cur;
                ++res;
                if (cur >= n - 1) break;
            }
        }
        return res;
};
//cur是当前能到达的最远位置 last是上一步能到达的最远位置