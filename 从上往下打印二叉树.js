/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    // write code here
    //BFS
    const queue = [];
    const data = [];
    if(!root){
        return [];
    }
    queue.push(root);
    while(queue.length!=0){
        let top = queue.shift();
        if(top.left)
            queue.push(top.left);
        if(top.right)
            queue.push(top.right);
        data.push(top.val);
    }
    return data;
}