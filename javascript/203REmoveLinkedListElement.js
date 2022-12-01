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

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    
    while(head !== null && head.val === val){
        head = head.next;
    }

    if (head === null) return null;

    var current = head;

    while (current.next !== null) {

        if (current.next.val === val) {
            current.next = current.next.next;
        } else {
            current = current.next

        }
    }
    
    return head;
};


var head = {val: 1, next: {val: 2, next: {val: 5, next: {val: 8, next: {val: 9, next: null}}}}};
var val = 5;

console.log(removeElements(head, val))