/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
    // copy next node's val into current node
    // delete next node
    
    node.val = node.next.val;
    node.next = node.next.next;
};

var node = {val: 1, next: {val: 2, next: {val: 5, next: {val: 8, next: {val: 9, next: null}}}}};
 