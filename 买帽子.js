var num = readline();
var price1 = readline().split(' ').map(x=>Number(x));
var mergeSort = function(price){
    var len = price.length;
    if(len<2)
        return price;
    var mid = Math.floor(len/2);
    var left = price.slice(0,mid);
    var right = price.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}
var merge  =function(left,right){
    var result = [];
    while (left.length > 0 && right.length > 0) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
    } else {
      result.push(right.shift());
      }
    }
    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());
    return result;
}

var sortedPrice = mergeSort(price1);
var index = 0;
var n = 0;
for(var curprice of sortedPrice){
    if(curprice!=n){
        index++;
        n=curprice;
    }
    if(index==3){
        console.log(curprice);    
        break;
    }
}
if(index!=3)
    console.log("-1");