/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {

    for(let i = 0; i<nums.length; i++) {
        if ( nums[i]== target){
            return i;
        } else {
            //init border conditions
            if (nums[nums.length - 1]< target ){
                return nums.length;
            }
            
            if (nums[0] > target ){
                return 0;
            }
            // end init border conditions

            if (nums[i]< target && nums[i+1]>target){
                return i+1;
            }
        }
    }
    
};

var nums = [1,3,5,6];
var target = 7;

console.log(searchInsert(nums, target))