/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var list1 = [1,2,4];
var list2 = [1,3,4];

 var mergeTwoLists = function(list1, list2) {
       
    // initialize a dummy head node
        const head = {val: -1, next: null}

    // initialize a crtNode variable to keep track of the current node, starting with the dummy head node
        let crtNode = head;
    
    // while there are still nodes to compare in two lists
        while (list1 && list2) {

        // if value of 2nd node is less than value of 1st node
            if (list2.val < list1.val) {
            // set the current node's link to l2 node
            crtNode.next = list2;
            // set the l2 node to l2's next node
            list2 = list2.next;
            }
       // else
       else {
            // set the current node's link to l1 node
            crtNode.next = list1;
            // set the l1 node to l1's next node
            list1 = list1.next;
       }
        // move on to the next node 
        crtNode = crtNode.next;
    }   
    // if one of the lists no longer have any nodes to compare, point crt's link to the remaining nodes in the other list
    // if both lists are empty, point crt's link to null
    crtNode.next = list1 || list2;
   
    // return merged linked list
    return head.next;

};


console.table(mergeTwoLists(list1,list2))
 

