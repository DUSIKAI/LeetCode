/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let res = 1;

    function depth(rootNode) {
        if(!rootNode) {
            return 0;
        }

        let left = depth(rootNode.left);
        let right = depth(rootNode.right);

        res = Math.max(res, right + left + 1);

        return Math.max(left, right) + 1;
    }

    depth(root);

    return res - 1;
};
// 二叉树的最长路径公式可以推到为：左子树最长路径 + 右子树最长路径 + 1