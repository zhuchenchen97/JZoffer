function rectCover(number)
{
    // write code here
    if(number<1)
        return 0;
    var mem = [1,2];
    for(var i=2; i<number; i++){
        mem[i] = mem[i-1]+mem[i-2];
    }
    return mem[number-1];
}