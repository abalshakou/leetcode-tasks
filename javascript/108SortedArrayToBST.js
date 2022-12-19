
/**
 * @param {number[]} postorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var sortedArrayToBST = function(nums) {

    var nums = [-10,-3,0,5,9];

  if (!nums.length) return null;
  if (nums.length === 1 ) return new TreeNode(nums[0]);
  
  let centerIdx = Math.floor(nums.length/2);    

  let node = new TreeNode(nums[centerIdx]);

  node.left = sortedArrayToBST(nums.slice(0, centerIdx))
  node.right = sortedArrayToBST(nums.slice(centerIdx + 1, nums.length))
    
    return node;
     
};

console.log(sortedArrayToBST());