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

var isValidBST = function(root, min=null, max=null) {

    function createTree() {
        let root = new TreeNode(6);
      
        root.left = new TreeNode(4);
        root.right = new TreeNode(8);
      
    //    root.left.left = new TreeNode(2);
    //    root.left.right = new TreeNode(5);
      
        //root.right.left = new TreeNode(3);
        //root.right.right = new TreeNode(70);
      
        //root.left.left.right = new TreeNode(80);
      
        return root;
      }

      var root = createTree();

      console.log(root)

      const stack = [[-Infinity, Infinity, root]];
      
      while(stack.length) {

        const [min, max, node] = stack.pop();

        if (!node) continue;

        if (node.val <= min || node.val >= max) return false;

        stack.push(
          [node.val, max, node.right],
          [min, node.val, node.left],
        )

      }


    return true;
};

console.log(isValidBST());