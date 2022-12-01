/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
        return nums.sort().some((a, i) => a === nums[i - 1]);
};

var nums = [1,2,3,6]

console.log(containsDuplicate(nums))