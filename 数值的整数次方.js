function Power(base, exponent)
{
    // write code here
    var result = 1;
    if(exponent==0)
        return 1;
    if(exponent<0){
        exponent = -exponent;
        for(var i=0;i<exponent;i++){
          result = base*result;
        }
        result = 1/result;
        return result;
    }
    
    for(var i=0;i<exponent;i++){
        result = base*result;
    }
    return result;
}