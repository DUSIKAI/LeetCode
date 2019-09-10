/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const res = [];
    
    if(root === null) {
        return res;
    }
    
    const stack = [];
    while(stack.length !== 0 || root !== null) {
        if(root !== null) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            res.push(root.val);
            root = root.right;
        }
    }
    
    return res;
};

/*
递归:
var inorderTraversal = function(root) {
    let res = [];
    helper(root, res);
    return res;
    
    function helper(root, res) {
        if (root != null) {
            if(root.left !== null) {
                helper(root.left, res);
            }
            res.push(root.val);
            if(root.right !== null) {
                helper(root.right, res);
            }
        }
    }
};
*/