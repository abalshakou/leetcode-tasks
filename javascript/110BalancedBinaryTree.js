
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var isBalanced = function(root) {

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

     
      var level = 0;
      var flag = true;

      traverse(root, level);
      return flag;

      function traverse(root, level) {
        if (!root) {
          return 0;
        }  
           
   
      
       const left_height  =   traverse(root.left, level + 1 );
       const right_height =  traverse(root.right, level + 1);

       if (Math.abs(right_height - left_height) > 1) {

        flag = false;
       }

       return Math.max(left_height, right_height) + 1;

      }
};

console.log(isBalanced());