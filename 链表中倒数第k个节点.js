/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    // write code here
    var slow = head;
    var quick = head;
    var k2 = k;
    var count = 0;
    while(quick){
        if(count>=k){
            slow = slow.next
        }
        count++;
        quick = quick.next;
    }
    if(count<k)
        return null;
    return slow;
}