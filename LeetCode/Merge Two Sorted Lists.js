/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var l3=new ListNode(-1);
    var c3=l3;
    while(l1!=null&&l2!=null){
        if(l1.val<=l2.val){
            c3.next=l1;
            l1=l1.next;
        }else{
            c3.next=l2;
            l2=l2.next;
        }
        c3=c3.next;
    }   
    c3.next = (l1===null) ? l2 : l1;  
    return l3.next;
};
