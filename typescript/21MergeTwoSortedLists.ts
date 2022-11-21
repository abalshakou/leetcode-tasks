/**
 * Definition for singly-linked list.
 * 
 * */
 class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
      }
  }

 var list1: ListNode = {val: 1, next: {val: 4, next: {val: 5, next: null}}};
 var list2: ListNode = {val: 1, next: {val: 3, next: {val: 4, next: null}}};
 
  function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
        
     // initialize a dummy head node
         const head : ListNode = {val: -1, next: null}
 
     // initialize a crtNode variable to keep track of the current node, starting with the dummy head node
         let crtNode : ListNode = head;
     
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
  
 
 