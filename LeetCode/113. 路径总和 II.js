/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if(root === null) return [];
    let res = [];
    
    function helper(result, ressum, root) {
        if(root.left === null && root.right === null) {
            if(ressum + root.val === sum) {
                res.push(result.concat([root.val]));
            }
            return ;
        }
        if(root.left !== null) {
            helper([...result, root.val], ressum+root.val, root.left);
        }
        if(root.right !== null) {
            helper([...result, root.val], ressum+root.val, root.right);
        }
    }
    
    helper([], 0, root);
    return res;
};