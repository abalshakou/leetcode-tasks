
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


var hasPathSum = function(root, targetSum) {
 
    if(!root) return false;
    if(root.val === targetSum && (!root.left && !root.right )) return true;
    
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};

var  targetSum = 3;

console.log(hasPathSum(root, targetSum));