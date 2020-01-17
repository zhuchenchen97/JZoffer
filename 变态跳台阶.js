function jumpFloorII(number)
{
    // write code here
    var mem = [1,2];
    var sum = 3;
    for(var i=2; i<number; i++){
        mem[i] = 1+sum;
        sum =mem[i]+sum;
    }
    return mem[number-1];
}