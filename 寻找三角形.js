var num =parseInt(readline());
var pointsRGB=[];
var points = [];
for(var i=0;i<num;i++){
    var str = readline().split(' ');
    pointsRGB.push(str[0]);
    points.push(str.slice(1));
}
var maxS = 0;
var curS = 0;
for(var i=0;i<num-2;i++){
    for(var j=i+1;j<num-1;j++){
        for(var k=j+1;k<num;k++){
            if(isTriangle(i,j,k)){
            if((pointsRGB[i]==pointsRGB[j]&&pointsRGB[k]==pointsRGB[j]&&pointsRGB[k]==pointsRGB[i])||((pointsRGB[i]!=pointsRGB[j])&&(pointsRGB[j]!=pointsRGB[k])&&(pointsRGB[j]!=pointsRGB[k]))){
                curS = areaS(i,j,k);
                if(curS>maxS)
                    maxS=curS;
            }                
            }
        }
    }
}
function isTriangle(i,j,k){
    var points1 = points[i];
    var points2 = points[j];
    var points3 = points[k];
    var a = Math.sqrt(Math.pow(points1[0]-points2[0],2)+Math.pow(points1[1]-points2[1],2)+Math.pow(points1[2]-points2[2],2));
    var b = Math.sqrt(Math.pow(points1[0]-points3[0],2)+Math.pow(points1[1]-points3[1],2)+Math.pow(points1[2]-points3[2],2));
    var c = Math.sqrt(Math.pow(points3[0]-points2[0],2)+Math.pow(points3[1]-points2[1],2)+Math.pow(points3[2]-points2[2],2));
    if((a+b>c)&&(a+c>b)&&(b+c>a))
        return true;
    else
        return false;
}
function areaS(i,j,k){
    var points1 = points[i];
    var points2 = points[j];
    var points3 = points[k];
    var a = Math.sqrt(Math.pow(points1[0]-points2[0],2)+Math.pow(points1[1]-points2[1],2)+Math.pow(points1[2]-points2[2],2));
    var b = Math.sqrt(Math.pow(points1[0]-points3[0],2)+Math.pow(points1[1]-points3[1],2)+Math.pow(points1[2]-points3[2],2));
    var c = Math.sqrt(Math.pow(points3[0]-points2[0],2)+Math.pow(points3[1]-points2[1],2)+Math.pow(points3[2]-points2[2],2));
    var p = (a+b+c)/2;
    var s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    return s;
}
console.log(maxS.toFixed(5));