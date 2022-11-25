/**
 * Definition for singly-linked list.
  
 */

 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

 var list1 = [1,2,4];
 var list2 = [1,3,4];

 var l1 = {val: 1, next: {val: 4, next: {val: 5, next: null}}};
 var l2 = {val: 5, next: {val: 3, next: {val: 9, next: null}}};

 var addTwoNumbers = function(l1, l2) {
   
        //init empty Listnode
    let res = new ListNode(-1),
    dummy = res,
    sum = 0, carry = 0;
//check if we have elements for summ
    while (l1 || l2 || sum > 0) {

        //sum element from 1st list
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        //sum element from 2nd list
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        //check if sum more 10
        if(sum >= 10) {
            sum -= 10;
            carry = 1;
        }

        dummy.next = new ListNode(sum);
        dummy = dummy.next;
        sum = carry;
        carry = 0;
        
    }   
    return res.next;
};
 
 console.table(addTwoNumbers(l1,l2))
  
 
 