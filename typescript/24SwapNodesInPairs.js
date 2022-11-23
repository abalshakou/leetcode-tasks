/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function swapPairs(head) {
    if (!head || !head.next)
        return head;
    //initialize temp variable - first var in list node
    var one = head;
    //assign head node next level of node
    head = one.next;
    // while there are still nodes to continue
    while (one && one.next) {
        //initialize temp variable - third var in list node
        var three = one.next.next;
        //assign third node - first node value
        one.next.next = one;
        //assign second node  -third and check if next node exists
        one.next = three && three.next ? three.next : three;
        //assign next node to third
        one = three;
    }
    //if loop ended - output
    return head;
}
;
var head = { val: 1, next: { val: 4, next: { val: 5, next: { val: 8, next: null } } } };
console.table(swapPairs(head));
