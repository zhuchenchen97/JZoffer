function reOrderArray(array)
{
    // write code here
    var a = [];
    for(var i =0; i<array.length; i++){
        if(array[i]%2==0){
            a.push(array[i]);
            array.splice(i,1);
            i--;
        }
    }
    array = array.concat(a);
    return array;
}