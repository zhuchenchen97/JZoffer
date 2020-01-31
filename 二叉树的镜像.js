/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    // write code here
    if(!root)
        return null;
    var left = root.left;
    var right = root.right;
    root.left = Mirror(right);
    root.right = Mirror(left);
    return root;
}