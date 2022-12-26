
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

var flatten = function(root) {
 
   var prev = null;
   
   var helper = function ( node ) {

    if (node != null) {
      
      helper(node.right)
      helper(node.left)

      node.right = prev
      node.left = null
      prev = node
    }
   
    console.log(node);
    return;

   }
   helper(root)
};


console.log(flatten(root));