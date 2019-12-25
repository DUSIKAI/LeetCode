/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder === null) return null;
    const len = preorder.length;
    return construct(0, len - 1);
    
    function construct(start, end) {
        if(start > end) {
            return null;
        }else if(start === end) {
            preorder.shift();
            return new TreeNode(inorder[start]);
        }else {
            const indexRoot = inorder.indexOf(preorder[0]);
            preorder.shift();
            const root = new TreeNode(inorder[indexRoot]);
            root.left = construct(start, indexRoot - 1);
            root.right = construct(indexRoot + 1, end);
            return root;
        }
    }
};