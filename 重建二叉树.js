/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    // write code here
    var result = null;
    if(pre.length==1){
        result = {
            val: pre[0],
            left: null,
            right: null
        }
    }else if(pre.length>1){
        var rootval = pre[0];
        var loc = 0;
        for(var i=0; i<vin.length; i++){
            if(vin[i]==rootval){
                loc=i;
                break;
            }
        }
        var vinleft = vin.slice(0,loc);
        var vinright = vin.slice(loc+1);
        var leftlen = vinleft.length;
        var rightlen = vinright.length;
        var preleft = pre.slice(1,1+leftlen);
        var preright = pre.slice(1+leftlen);
        result = {
            val : rootval,
            left : reConstructBinaryTree(preleft,vinleft),
            right : reConstructBinaryTree(preright,vinright)      
        }      
    }
    return result;
}