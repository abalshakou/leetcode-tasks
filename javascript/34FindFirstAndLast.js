/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {

   let start = 0;
   let end = nums.length - 1;

   while (start <= end) {

    let middle = Math.floor((start + end)/ 2);

    if (nums[middle] = target) {
        return middle;
    } else if (nums[middle] < target) {
        start = middle + 1;
    } else {
        end =  middle - 1;
    }
   }
    
    return [-1,-1];
};

var nums = [5,7,7,8,8,10], target = 8;

console.log(searchRange(nums, target))