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
var zigzagLevelOrder = function(root) {
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
           if(count%2===0){
               n[count].push(r.val);
           }else {
               n[count].unshift(r.val);
           }
       }
       helper(r.right, n, count);
   }