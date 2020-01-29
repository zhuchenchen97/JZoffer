/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    if(pRoot2 == null || pRoot1==null)
        return false;
    if(pRoot1.val==pRoot2.val){
        if(doesTree1HaveTree2(pRoot1,pRoot2))
            return true;
    }
    if(HasSubtree(pRoot1.left,pRoot2)||HasSubtree(pRoot1.right,pRoot2))
        return true;
    
    return false;
}

function doesTree1HaveTree2(pRoot1,pRoot2){
    if(pRoot2==null)
        return true;
    if(pRoot1==null)
        return false;
    if(pRoot1.val!=pRoot2.val)
        return false;
    return doesTree1HaveTree2(pRoot1.left,pRoot2.left)&&doesTree1HaveTree2(pRoot1.right,pRoot2.right)
}