/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    // 反证法 只考虑不重叠的状态
    // 上：y1' >= y2
    // 右：x1' >= x2
    // 下：y2' <= y1
    // 左：x2' <= x1
    return !((rec1[3]<=rec2[1])||(rec1[2]<=rec2[0])||(rec1[1]>=rec2[3])||(rec1[0]>=rec2[2]));
};