/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let len=lists.length;
    if(len===0) return null;
    if(len===1) return lists[0];
    let end=len-1,start=0;
    while(end>0){
        start=0;
        if(start<end){
            lists[start]=sort(lists[start],lists[end]);
            start++;
            end--
        }
    }
    return lists[0];
};
function sort(l1,l2){
    let res=new ListNode(0);
    let cur=res;
    while(l1!=null&&l2!=null){
        if(l1.val<l2.val){
            cur.next=l1;
            l1=l1.next;
        }else if(l2.val<=l1.val){
            cur.next=l2;
            l2=l2.next;
        }
        cur=cur.next;
    }
    cur.next=(l1==null)?l2:l1;
    return res.next;
}