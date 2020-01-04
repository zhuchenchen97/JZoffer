var num = parseInt(readline());
for(var i = 0;i<num; i++){
    var str1= readline();
    var str2 = readline().split(' ');
    var num_4 = 0;
    var num_2 = 0;
    var num_other = 0;
    for(var j=0;j<str2.length;j++){
        if(str2[j]%4==0)
            num_4++;
        else if(str2[j]%2==0)
            num_2++;
        else
            num_other++;
    }
    if(num_2==0){
        if(num_4>=num_other-1)
            console.log('Yes');
        else
            console.log('No');
    }else{
        if(num_4>=num_other)
            console.log('Yes');
        else
            console.log('No');
    }
}
