
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var buildTree = function(preorder, inorder) {

    function createTree() {
        let root = new TreeNode(2);
      
        root.left = new TreeNode(1);
        root.right = new TreeNode(3);
      
       // root.left.left = new TreeNode(3);
       //root.left.right = new TreeNode(50);
      
        //root.right.left = new TreeNode(3);
        //root.right.right = new TreeNode(70);
      
        //root.left.left.right = new TreeNode(80);
      
        return root;
      }

      var root = createTree();
      var preorder = [3,9,20,15,7];
      var inorder = [9,3,15,20,7];

    if (!preorder.length || !inorder.length ) return null;

    let node = new TreeNode(preorder[0]);
    let mid = inorder.indexOf(preorder[0]);

    node.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
    node.right = buildTree(preorder.slice( mid + 1), inorder.slice(mid + 1))
      
      return node;
       
};

console.log(buildTree());