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
var isBalanced = function(root) {
    var helper = function(root){
         if(root === null) return 0;
         let left = helper(root.left)+1;
         let right = helper(root.right)+1;
         return Math.max(left, right);
 } 
    
   return root==null ||(Math.abs(helper(root.left)-helper(root.right))<=1) && isBalanced(root.left) && isBalanced(root.right);
 };
 