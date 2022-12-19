
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var levelOrder = function(root) {

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

      var result = [];
      var level = 0;

      traverse(root, level);
      return result.reverse();

      function traverse(root, level) {
        if (!root) {
          return true;
        } else {
          if (level >= result.length) {
            result[level] = [];
       }
      
       result[level].push(root.val);
       traverse(root.left, level + 1);
       traverse(root.right, level + 1);

        }
      }
};

console.log(levelOrder());