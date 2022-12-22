
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function createTree() {
  let root = new TreeNode(2);

  root.left = new TreeNode(1);
  root.right = new TreeNode(3);

  //root.left.left = new TreeNode(3);
 //root.left.right = new TreeNode(50);

  //root.right.left = new TreeNode(3);
  //root.right.right = new TreeNode(70);

  //root.left.left.right = new TreeNode(80);

  return root;
}

var root = createTree();


var pathSum = function(root, targetSum) {
  var result = [];

 // console.log(root);
  
  helper(root, targetSum, [], result);
  return result;
};

var helper = function (root, targetSum, now, result) {
 
  if(!root) return;

  now.push(root.val);
 // console.log(result);

  if(root.val === targetSum && (!root.left && !root.right )) result.push(now);
  
  helper(root.left, targetSum - root.val, Array.from(now), result);
  helper(root.right, targetSum - root.val, Array.from(now), result);
};

var  targetSum = 3;

console.log(pathSum(root, targetSum));