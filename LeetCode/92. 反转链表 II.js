/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    //虚拟节点 简化操作
    const dummyHead = {
        next: head
    }
    
    let current = dummyHead.next; //当前遍历的节点
    let pre = current; //因为要反转,我们需要记住前一个节点
    let index =0; // 链表索引,用来判断反转位置是否特殊
    
    //定义四个特殊节点
    let midStartNode = null;
    let preMidStartNode = null;
    let midEndNode = null;
    let postMidEndNode = null;
    
    while(current) {
        let next = current.next;
        index++;
        
        //对(m,n)节点内的数字进行反转
        if(index > m && index <= n) {
            current.next = pre;
        }
        
        //用于更新特殊节点的值
        if(index === m -1) {
            preMidStartNode = current;
        }
        
        if(index === m) {
            midStartNode = current;
        }
        
        if(index === n+1) {
            postMidEndNode = current;
        }
        
        if(index === n) {
            midEndNode = current;
        }
        
        pre = current;
        
        current = next;
    }  
    
    //合并两个链表
    (preMidStartNode || dummyHead).next = midEndNode;
    midStartNode.next = postMidEndNode;
    
    return dummyHead.next;
};