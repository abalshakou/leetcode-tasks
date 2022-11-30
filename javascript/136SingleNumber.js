/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    
    return nums.reduce((prev, curr) => prev ^ curr);
};

var nums = [4,1,2,1,2];

console.log(singleNumber(nums))