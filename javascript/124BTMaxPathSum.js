
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

/**
Here we need to move all our left child nodes to right and append the already present right child node to the end.
So if we have left child node, first of all store the currently present right child to a variable and keep root.right as the left child. Then make the left child as null.
Then the stored right child is appended towards the end of the left child node that is recently attached.
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

var maxPathSum = function(root) {
  let maxPath = -Infinity;
  let leftPathSum, rightPathSum;

  // post order traversal of subtree rooted at `node`
  function gainFromSubtree(node) {
      if (!node) {
          return 0;
      }
      // add the path sum from left subtree and the current root
      let gainFromLeft = Math.max(gainFromSubtree(node.left), 0)

      // add the path sum from right subtree and the current root
      let gainFromRight = Math.max(gainFromSubtree(node.right), 0)

      // if left or right path sum are negative, they are counted
      // as 0, so this statement takes care of all four scenarios
      maxPath = Math.max(maxPath, gainFromLeft + gainFromRight + node.val);

      // return the max sum for a path starting at the root of subtree
      return Math.max(
        gainFromLeft + node.val,
        gainFromRight + node.val
      );
  }
  gainFromSubtree(root);
  return maxPath;
};


console.log(maxPathSum(root));