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

  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(50);

  root.right.left = new TreeNode(5);
  root.right.right = new TreeNode(70);

  //root.left.left.right = new TreeNode(80);

  return root;
}

var root = createTree();

// DFS
// find the closet next on the right hand
let findNext = root => {
  while (root) {
  
      if (root.left) return root.left
      if (root.right) return root.right
      root = root.next
  }
  return null;
}


var connect = function(root) {

  if (null == root) return root;
  console.log('==========start=============');
    console.log(root);
    console.log('==========end=============');
  if (null != root.left) {
      root.left.next = root.right ? root.right : findNext(root.next);
  }
  
  if (null != root.right) {
      root.right.next = findNext(root.next);
  }
 
  connect(root.right);
  connect(root.left);
  
  return root;
}


console.log(connect(root));