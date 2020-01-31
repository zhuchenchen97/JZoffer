var stack = [];
var minStack = [];
function push(node)
{
    // write code here
    stack.push(node);
    if(minStack.length==0||node<=minStack[minStack.length-1]){
        minStack.push(node);
    }
}
function pop()
{
    // write code here
    if (stack.length === 0) {
        throw new Error('Your stack is empty!');
    } 
    if(stack[stack.length-1]==minStack[minStack.length-1])
        minStack.pop();
    stack.pop();
    
}
function top()
{
    // write code here
    return stack[stack.length-1];
}
function min()
{
    // write code here
    if (stack.length === 0) {
        throw new Error('Your stack is empty!');
    } 
    return minStack[minStack.length-1];
}