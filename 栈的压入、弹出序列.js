function IsPopOrder(pushV, popV)
{
    // write code here
    if(pushV.length==0||popV.length==0)
        return false;
    var temp = [];
    var index = 0;
    for(var i =0; i<popV.length; i++){
        temp.push(pushV[i]);
        while(temp.length!=0&&temp[temp.length-1]==popV[index]){
           temp.pop();
           index++;
        }
    }
    if(temp.length==0)
        return true
    else
        return false
}