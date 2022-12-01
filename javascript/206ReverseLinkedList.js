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

 var reverseList = function(head) {

    var prev = null;
    var current = head;
    var next = null;

    while (current != null ) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    head = prev;
    return head;   

};

var head = {val: 1, next: {val: 2, next: {val: 5, next: {val: 8, next: {val: 9, next: null}}}}};
 

console.log(reverseList(head))