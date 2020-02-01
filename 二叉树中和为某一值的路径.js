/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
//recursion
var path;
var stack;
function FindPath(root, expectNumber)
{
    if (root == null) return [];
    stack = [];
    path = [];
    cal(root,expectNumber);
    return path ;
}
 
function cal(root,expectNumber) {
    var n = root.val;
    stack.push(n);
    if (n == expectNumber && root.left == null  && root.right == null){
        path.push(stack.slice());
    }else{
        if(root.left!=null){
            cal(root.left,expectNumber-n);
        }
        if(root.right != null){
            cal(root.right,expectNumber-n);
        }
    }
    stack.pop();
}