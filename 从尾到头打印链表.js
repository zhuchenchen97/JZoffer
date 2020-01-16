/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    var result = [];
    while(head){
        result.unshift(head.val);
        head=head.next;
    }
    return result;
}