function printMatrix(matrix)
{
    // write code here
    if(!matrix)
        return null;
    var result = [];
    var row = matrix.length;
    var col = matrix[0].length;
    var left = 0;
    var top = 0;
    var right = col-1;
    var bottom = row-1;
    while(left<=right && top<=bottom){
        for(var i=left;i<=right;i++)
            result.push(matrix[top][i]);
        for(var i=top+1;i<=bottom;i++)
            result.push(matrix[i][right]);
        if(top!=bottom){
           for(var i=right-1;i>=left;i--)
            result.push(matrix[bottom][i]);
        }
        if(left!=right){
           for(var i=bottom-1;i>top;i--)
              result.push(matrix[i][left]);            
        }

        top++;
        bottom--;
        left++;
        right--;
    }
    return result;
}
