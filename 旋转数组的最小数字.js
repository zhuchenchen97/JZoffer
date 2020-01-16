function minNumberInRotateArray(rotateArray)
{
    // write code here
    if(rotateArray.length==0)
        return 0;
    var i=0;
    var j=1;
    while(rotateArray[i]&&rotateArray[j]){
        if(rotateArray[j]<rotateArray[i])
            return rotateArray[j];
        else{
            i++;
            j++;
        }
    }
    return rotateArray[i];
}