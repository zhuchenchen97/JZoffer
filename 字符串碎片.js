var n =readline();
var len = 0;
var tmp =[];
var cur = 0;
for(var i=0;i<n.length-1;i++){
    if(n[i]!=n[i+1]){
        cur++;
        tmp.push(cur);
        cur=0;
    }
    else{
       cur++;
    }
}
if(cur==0)
    tmp.push(1);
else
    tmp.push(cur+1);
var sum=0;
for(var m of tmp){
    sum+=m;
}
var result = sum/tmp.length;
console.log(result.toFixed(2));