function ReverseList(pHead)
{
    // write code here
    if(pHead==null)
        return null;
    var pre = null;
    var cur = pHead;
    var nex = cur.next;
    while(cur){
        cur.next = pre;
        pre = cur;
        cur = nex;
        if(nex)
         nex = nex.next;
    }
    return pre;
}