/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let mergeArray = nums1.concat(nums2);
   
    mergeArray.sort(( a, b ) =>  a - b);
    if (mergeArray.length % 2 == 0) {
       
        return (mergeArray[Math.floor(mergeArray.length/2)] + mergeArray[Math.floor(mergeArray.length/2) - 1])/2
    } else {
       
        return mergeArray[Math.floor(mergeArray.length/2)]
    }
};


var nums1 = [3];
var nums2 = [-2,-1];

console.log(findMedianSortedArrays(nums1, nums2))