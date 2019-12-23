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

var isSymmetric = function(root) {
    if(root===null) return true;
var isEqualTree =function(p,q){
         if((p && q && p.val === q.val)){
            return isEqualTree(p.left,q.right) && isEqualTree(p.right,q.left)
        }else if(!p&&!q){
            return true;
        }else{
            return false;
        }
    }
 return isEqualTree(root.left,root.right)
 /**   if(!root) return true;
    let queue=[root.left,root.right];
    while(queue.length){
        let len=queue.length;
        let level=[];
        while(len){
            let pop=queue.shift();
            level.push(pop);
            if(pop){
                queue.push(pop.left);
                queue.push(pop.right);
            }
            len--;
        }
        for (let i = 0, l = level.length; i < l/2; i++) {
        // 一个为null，一个不为null的情况
      if (level[i] === null && level[l-i-1] !== null) return false    
      if (level[i] !== null && level[l-i-1] === null) return false
 
        // 两个都不是null的情况
      if (level[i] !== null && level[l-i-1] !== null) {
        if (level[i].val !== level[l-i-1].val) return false
      } 
    }
    }
    return true;**/
};