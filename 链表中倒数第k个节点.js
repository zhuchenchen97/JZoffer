/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    // write code here
    var len =0;
    var a = head;
    while(a){
        len++;
        a = a.next;
    }
    if(k>len)
        return null
    var nodek = head;
    for(var i = 0;i<len-k;i++){
        nodek = nodek.next;
    }
    return nodek;
}