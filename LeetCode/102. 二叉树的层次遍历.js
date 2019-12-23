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
var levelOrder = function(root) {
    if(!root) return [];
    let nodes = [], count = -1;
    helper(root, nodes, count);
    return nodes;
};

function helper(r, n, count) {
        if(!r) return;
        count++;
        helper(r.left, n, count);
        if(n[count] === undefined) {
            n[count] = new Array();
            n[count].push(r.val);
        }else {
            n[count].push(r.val);
        }
        helper(r.right, n, count);
    }