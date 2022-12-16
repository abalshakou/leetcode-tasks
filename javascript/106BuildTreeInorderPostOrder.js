
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

var buildTree = function(postorder, inorder) {

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
      var postorder = [9,15,7,20,3];
      var inorder = [9,3,15,20,7];

    if (!postorder.length || !inorder.length ) return null;

    let node = new TreeNode(postorder[postorder.length - 1]);
    let mid = inorder.indexOf(postorder[postorder.length - 1]);

    node.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid))
    node.right = buildTree(inorder.slice(mid + 1), postorder.slice( mid, -1)  )
      
      return node;
       
};

console.log(buildTree());