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

var recoverTree = function(root) {

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

      console.log(root)
      let small = null;
      let big = null;
      let prev = null;

      let dfs = function(root) {
        if (!root) return;
        dfs(root.left);
        if(prev != null && prev.val > root.val) {
          small = root;
          if (!big) {
            big = prev;
          } else return;
        }

        prev = root;
        dfs(root.right)

      }

      dfs(root);

      [big.val, small.val] = [small.val, big.val];
   
};

console.log(recoverTree());