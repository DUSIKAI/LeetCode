/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var level=0;
    var arr=[];
    inorder(root,arr,level);
    return arr.reverse();
    function inorder(node,arr,level){
        if(!node) return;
        level++;
        inorder(node.left,arr,level);
        if(!arr[level-1]){
            arr[level-1]=[];
        }
        arr[level-1].push(node.val);
        inorder(node.right,arr,level);
    }
};