function MoreThanHalfNum_Solution(nums)
{
    // write code here
    var element = {};
    var len = nums.length;

    for(var i=0; i<nums.length; i++){
        if(element.hasOwnProperty(nums[i])){
            element[nums[i]]++;
            if(element[nums[i]]>nums.length/2)
                return nums[i];
        }
        else{
            element[nums[i]]=1;            
            if(element[nums[i]]>nums.length/2)
                return nums[i];
            
        }
            
    }
    return 0;
}