
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var minDepth = function(root) {

    function createTree() {
        let root = new TreeNode(2);
      
        root.left = new TreeNode(1);
        root.right = new TreeNode(3);
      
        root.left.left = new TreeNode(3);
       root.left.right = new TreeNode(50);
      
        root.right.left = new TreeNode(3);
        root.right.right = new TreeNode(70);
      
        //root.left.left.right = new TreeNode(80);
      
        return root;
      }

      var root = createTree();

     
    if(!root) return 0;
    if(!root.left) return minDepth(root.right) + 1;
    if(!root.right) return minDepth(root.left) + 1;
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

console.log(minDepth());