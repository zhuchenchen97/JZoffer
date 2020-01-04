var a = readline();
var b = readline();
var n = a;
var stack = b.split(' ');

var help = [];
while(stack.length!=0){
    var cur = stack.pop();  
    while(help.length!=0&&cur>help[help.length-1]){
       stack.push(help.pop());
    }
     help.push(cur);
}

//while(help.length!=0){
    //stack.push(help.pop());
//}
help = help.join(' ');
console.log(help);