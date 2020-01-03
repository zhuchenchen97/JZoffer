function Find(target, array)
{
    // write code here
    var leni  = array.length;
    var lenj = array[0].length;
    if(leni==0&&lenj==0)
        return false;
    var i = 0;
    var j = lenj-1;
    while(i<leni &&j>=0){
        if(target<array[i][j]){
            j--;
        }else if(target>array[i][j]){
            i++;
        }else
            return true;
    }
    return false;
}