function Fibonacci(n)
{
    // write code here
    if(n==0)
        return 0;
    if(n==1)
        return 1;
    var mem = [0,1];
    for(var i=2; i<=n; i++){
        mem[i] = mem[i-1] + mem[i-2];
    }
    return mem[n];
}