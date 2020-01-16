function Find(target, array)
{
    // write code here
    var row = 0;
    var col = array[0].length-1;
    while(row<=array.length-1&&col>=0){
        if(target<array[row][col]){
            col--;
        }else if(target>array[row][col]){
            row++;
        }else{
            return true;
        }
    }
    return false;
}