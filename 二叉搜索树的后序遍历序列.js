function VerifySquenceOfBST(sequence)
{
    // write code here
    var len = sequence.length;
    if(len==0)
        return false;
    var left=[];
    var right=[];
    var flag='left';
    for(var i=0;i<len-1;i++){
        if(sequence[i]<sequence[len-1]){
            if(flag=='left')
              left.push(sequence[i]);
            else
                return false            
        }
        else{
            if(flag=='left'){
                flag='right';
            }
                right.push(sequence[i]);          
        }
    }
    var l = true;
    var r = true;
    if(left.length>0)
        l=VerifySquenceOfBST(left);
    if(right.length>0)
        r=VerifySquenceOfBST(right);
    return l&&r;
}