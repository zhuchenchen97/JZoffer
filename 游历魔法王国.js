var str1 = readline().split(' ');
var str2 = readline().split(' ');
var citynum = str1[0];
var L = str1[1];
var parents = str2;
var depth = [];
var result;
depth[0]=0;
var maxDep = 0;
for(var i = 0; i<citynum-1; i++){
    depth[i+1] = 1+depth[parents[i]];
    maxDep = Math.max(maxDep,depth[i+1]);
}
if(L<maxDep)
    result = 1+parseInt(L);
else{
    result = 1+maxDep+Math.floor((L-maxDep)/2);    
}
console.log(result);
