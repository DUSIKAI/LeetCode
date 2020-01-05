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
var minDepth = function(root) {
    if(root == null) return 0;
    return getMin(root);
};

function getMin(root) {
    if(root == null) {
        return Number.MAX_VALUE;
    } 
    if(!root.left && !root.right) {
        return 1;
    }
    return Math.min(getMin(root.left), getMin(root.right)) + 1; 
}