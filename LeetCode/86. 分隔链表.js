/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let before_head = new ListNode(0);
    let before = before_head;
    let after_head = new ListNode(0);
    let after = after_head;
    
    while(head != null) {
        if(head.val < x) {
            before.next = head;
            before = before.next;
        }else{
            after.next = head;
            after = after.next;
        }
        head=head.next;
    }
    after.next = null;
    //将before和after合并
    before.next = after_head.next;
    
    return before_head.next;
};