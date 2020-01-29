/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    // write code here
    if(pHead1==null&&pHead2==null)
        return null;
    if(pHead1==null)
        return pHead2;
    if(pHead2==null)
        return pHead1;
    var num1 = pHead1.val;
    var num2 = pHead2.val;
    var min;
    var cur = new ListNode();
    var pHead3 = cur;
    cur.val = 0;
    while(pHead1 && pHead2){
        if(pHead1.val <pHead2.val){
            cur.next = pHead1;
            pHead1 = pHead1.next;
            cur = cur.next;
        }else{
            cur.next = pHead2;
            pHead2 = pHead2.next;
            cur = cur.next;
        }
    }
    if(pHead1){
        cur.next = pHead1;
    }else{
        cur.next = pHead2;
    }
    return pHead3.next;
}