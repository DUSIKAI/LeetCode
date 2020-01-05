/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let last = null;
    const f = root => {
        if(!root) return;
        if(last) last.left = null, last.right = root;
        last = root;
        const temp = last.right;
        f(last.left);
        f(temp);
    }
    f(root);
};