/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    
    if (nums.length == 0) return 0;
    let k = 0;
    for (let value of nums) {
        if (value != nums[k]) {
            nums[++k] = value; 
        }
    }
    return k + 1;

};

var nums = [1,1,2,3,4,5,5, 5,6,7,8]

console.log(removeDuplicates(nums))