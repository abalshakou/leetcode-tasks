
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
       this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
   }
  
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var sortedListToBST = function(nums) {

  if (!nums.length) return null;
  if (nums.length === 1 ) return new TreeNode(nums[0]);
  
  let centerIdx = Math.floor(nums.length/2);    

  let node = new TreeNode(nums[centerIdx]);

  node.left = sortedListToBST(nums.slice(0, centerIdx))
  node.right = sortedListToBST(nums.slice(centerIdx + 1, nums.length))
    
    return node;
     
};

var head = {val: 1, next: {val: 2, next: {val: 5, next: {val: 8, next: {val: 9, next: null}}}}};

function findlength( head)
{
    var curr = head;
    let cnt = 0;
    while (curr != null)
    {
        cnt++;
        curr = curr.next;
    }
    return cnt;
}
  
function convertArr( head)
{
  
    // Find the length of the
    // given linked list
    let len = findlength(head);
    console.log(len)
    // Create an array of the
    // required length
    let arr = new Array(len);
   
    console.log(arr)
    
    let index = 0;
    var curr = head;
  
    // Traverse the Linked List and add the
    // elements to the array one by one
    while (curr != null)
    {
        arr[index++] = curr.val;
        curr = curr.next;
        console.log(arr)
    }
  
    // Print the created array
    return arr;
}

var nums = convertArr(head);

console.log(sortedListToBST(nums));