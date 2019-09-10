/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if(!n) return [];
    return helper(1,n);
    
    function helper(start, end) {
        let res = [];
        if(start > end) return [null];
        
        for(let val = start; val <= end; val++) {
            let left = helper(start, val-1);
            let right = helper(val+1, end);
            
            left.forEach(function(a) {
                right.forEach(function(b) {
                    var node = new TreeNode(val);
                    node.left = a;
                    node.right = b;
                    res.push(node);
                });
            });
        }
        
        return res;
    }
};