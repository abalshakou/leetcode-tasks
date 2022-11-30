/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {

    if (head === null) return null;

    var current = head;

    while( current !== null ) {
        while (current.next !== null && current.val === current.next.val) {
            current.next = current.next.next;
        }
        current = current.next;
    }
    
    return head;
};

var head = {val: 1, next: {val: 1, next: {val: 5, next: {val: 8, next: {val: 9, next: null}}}}};


console.log(deleteDuplicates(head))