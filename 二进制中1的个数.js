function NumberOf1(n)
{
    // write code here
    var flag = 1;
    var num = 0;
    while(flag!=0){
        if((n&flag)!=0)
            num++;
        flag = flag<<1;
    }
    return num;
}