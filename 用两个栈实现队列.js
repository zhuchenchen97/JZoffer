var tmpStack = [];
var thisStack = [];
function push(node)
{
    // write code here
    thisStack.push(node);
    
}
function pop()
{
    // write code here
    if(tmpStack.length==0){
        while(thisStack.length){
            tmpStack.push(thisStack.pop());
        }
    }
    return tmpStack.pop();
}