/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(root === null) return null;
    if(root.left !== null) {
        root.left.next = root.right;
        if(root.next !== null) root.right.next = root.next.left;
    }
    connect(root.left);
    connect(root.right);
    return root;
};
/*
    迭代
    let pre = root;
    while(pre != null) {
        let cur = pre;
        while(cur != null) {
            if(cur.left != null) cur.left.next = cur.right;
            if(cur.right != null && cur.next != null) cur.right.next = cur.next.left;
        }
        pre = pre.left;
    }
    return root;
*/