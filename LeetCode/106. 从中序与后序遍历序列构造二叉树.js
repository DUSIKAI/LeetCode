/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    return build(inorder);
    
    function build(inorder) {
        if(inorder.length === 0) return null;
        const rootVal = postorder.pop();
        const root = new TreeNode(rootVal);
        root.right = build(inorder.slice(inorder.indexOf(rootVal)+1));
        root.left = build(inorder.slice(0, inorder.indexOf(rootVal)));
        return root;
    }
};