/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
    
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 var inorderTraversal = function(root) {

    function createTree() {
        let root = new TreeNode(1);
      
        root.left = new TreeNode(null);
        root.right = new TreeNode(2);
      
       // root.left.left = new TreeNode(3);
       //root.left.right = new TreeNode(50);
      
        root.right.left = new TreeNode(3);
        //root.right.right = new TreeNode(70);
      
        //root.left.left.right = new TreeNode(80);
      
        return root;
      }

      var root = createTree();

    const stack = [];
    const res = [];

    while (root || stack.length) {
        if (root) {
         
            stack.push(root);
            root = root.left;
           
        } else {
            root = stack.pop();
            res.push(root.val);
            root = root.right;
        }
    }
    return res;
    
};

console.log(inorderTraversal());