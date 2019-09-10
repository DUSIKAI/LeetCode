/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(root === null) return true;
    let vals = [];
    inorder(root, vals);
    for(let i=0; i<vals.length; i++) {
        if(vals[i] <= vals[i-1]){
            return false;
        }
    }
    return true;
    
    function inorder(r, n) {
        if(r === null) return;
        inorder(r.left, n);
        n.push(r.val);
        inorder(r.right, n);
    }
};
