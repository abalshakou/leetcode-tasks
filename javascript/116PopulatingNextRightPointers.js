/**
 * @param {Node} root
 * @return {Node}
 */

 function TreeNode(val, left, right, next) {
      this.val = val === undefined ? null : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
      this.next = next === undefined ? null : next;
   };

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

var connect = function(root) {
 
  console.log(root)
  
  if (root == null || root.left == null) return root;
  root.left.next = root.right;
  root.right.next = root.next ? root.next.left:null;
  connect(root.left);
  connect(root.right);
  return root;
};


console.log(connect(root));