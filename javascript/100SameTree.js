/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var isSameTree = function(root1, root2) {

    function createTree() {
        let root1 = new TreeNode(2);
      
        root1.left = new TreeNode(1);
        root1.right = new TreeNode(3);
      
       // root.left.left = new TreeNode(3);
       //root.left.right = new TreeNode(50);
      
        //root.right.left = new TreeNode(3);
        //root.right.right = new TreeNode(70);
      
        //root.left.left.right = new TreeNode(80);
      
        return root1;
      }

      function createTree2() {
        let root2 = new TreeNode(2);
      
        root2.left = new TreeNode(1);
        root2.right = new TreeNode(3);
      
       // root.left.left = new TreeNode(3);
       //root.left.right = new TreeNode(50);
      
        //root.right.left = new TreeNode(3);
        //root.right.right = new TreeNode(70);
      
        //root.left.left.right = new TreeNode(80);
      
        return root2;
      }

      var root1 = createTree();
      var root2 = createTree2();

    if (!root1 && !root2) return true;
    if (!root1 || !root2 || root1.val !== root2.val) return false;
   
    return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right);
};

console.log(isSameTree());