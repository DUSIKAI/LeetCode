/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let dummy=new ListNode(-1);
    dummy.next=head;
    let pre=dummy;
    let cur=head;
    let i=1;
    while(cur){
        if(i%k===0){
            pre=reverse(pre,cur.next);
            cur=pre.next;
        }else{
            cur=cur.next;
        }
        i++;
    }
    return dummy.next;
};
function reverse(pre,next){
    let last=pre.next,cur=last.next;
    while(cur!=next){
        last.next=cur.next;
        cur.next=pre.next;
        pre.next=cur;
        cur=last.next;
    }
    return last;
}
