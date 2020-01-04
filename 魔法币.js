var n = readline();
var result=[];
while(n>0){
    if(n==1){
        result.unshift(1);        
        break;
    }
    else if(n==2){
        result.unshift(2);        
        break;
    }
    else if((n-1)%2==0){
        result.unshift(1);
        n=(n-1)/2;
    } 
    else{
        result.unshift(2);
        n=(n-2)/2;  
    }
}
console.log(result.join(''));