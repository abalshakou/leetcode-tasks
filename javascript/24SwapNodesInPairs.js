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
 var swapPairs = function(head) {

       //initialize finish condition 
     if (!head || !head.next) return head;

      //initialize temp variable - first var in list node
     let one = head;

     //assign head node next level of node
     head = one.next;
    
     // while there are still nodes to continue
        while (one && one.next) {
                  
            //initialize temp variable - third var in list node
            let three = one.next.next;
            
            //assign third node - first node value
            one.next.next = one;

            //assign second node  -third and check if next node exists
            one.next = three && three.next ? three.next : three;
            
            //assign next node to third
            one = three;
        }

        //if loop ended - output
        return head;
};

var head = [1,2,4,8];

console.log(swapPairs(head))
 

