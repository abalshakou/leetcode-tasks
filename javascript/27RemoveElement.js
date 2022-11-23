/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeElement = function(nums, val) {
    
    //Go through the array and delete occurences of that value
    for(var i = 0; i < nums.length; i++){
        if(nums[i] === val){
            nums.splice(i,1);
            i--;
        }  
    };
    //Return the new length
    return nums.length;

};
var val = 2;
var nums = [1,1,2,3,4,5,5,5,6,7,8]

console.log(removeElement(nums, val))