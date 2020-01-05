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
    if(root == null) {
        return null;
    }
    var stack = [root];
    while(stack.length!= 0) {
        var s = [];
        var length = stack.length;
        for (var i = 0; i<length; i++) {
            if(i == length -1) {
                stack[i].next = null;
            } else {
                stack[i].next = stack[i+1];
            }
            stack[i].left && s.push(stack[i].left);
            stack[i].right && s.push(stack[i].right);
        }
        stack = s;
    }
    return root;
};
/*递归
var connect = function(root) {
    if(root === null) return null;
    
    if(root.left != null) {
        if(root.right != null) root.left.next = root.right;
        else root.left.next = findLeftRoot(root);
    }
    
    if(root.right != null) {
        root.right.next = findLeftRoot(root);
    }
    
    connect(root.right);
    connect(root.left);
    
    return root;
    
    function findLeftRoot(root) {
        if(root.next === null) return null;
        while(root.next != null) {
            if(root.next.left != null) return root.next.left;
            if(root.next.right != null) return root.next.right;
            root = root.next;
        }
        return null
    }
};
*/