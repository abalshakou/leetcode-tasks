/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var reverseKGroup = function(head, k) {
      //initialize finish condition 
      if (!head ) return head;

       //initialize temp variable - first var in list node
     let tail = head;

     for(let i = 1; i < k; i++) {
      tail = tail.next;

      if(!tail) return head;
     }
    
     let next = tail.next;
     tail.next = null;
     reverse(head);
     head.next = reverseKGroup(next, k)
     return tail;
};


var reverse = function(curr) {

  var prev = null;

  while(curr) {
    var next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}


var head = {val: 1, next: {val: 4, next: {val: 5, next: {val: 8, next: {val: 9, next: null}}}}};
var k = 3;

console.log(reverseKGroup(head, k))
 
