var num = readline();
var points = readline().split(' ').map(x=>Number(x));
var sum = 0;
var optimizeSum = 0;
var maxdis=0;
var cuedis = 0;
for(var i=1;i<points.length-1;i++){
    sum+=Math.abs(points[i]-points[i-1]);
    var pre =i-1;
    var cur = i;
    var next = i+1;
    curdis = Math.abs(points[pre]-points[cur])+Math.abs(points[next]-points[cur])-Math.abs(points[pre]-points[next]);
    if(curdis>maxdis)
        maxdis = curdis;
}
sum+=Math.abs(points[points.length-1]-points[points.length-2]);
optimizeSum = sum-maxdis;
console.log(optimizeSum);