/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummy=new ListNode(0);
    dummy.next=head;
    head=dummy;
    while(head.next!=null&&head.next.next!=null){
        let n1=head.next,n2=head.next.next;
        // head->n1->n2->...
        // => head->n2->n1->...
        head.next=n2;
        n1.next=n2.next;
        n2.next=n1;
        head=n1;
    }
    return dummy.next;
};