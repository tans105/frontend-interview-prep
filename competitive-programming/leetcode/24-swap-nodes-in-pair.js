/*
https://leetcode.com/problems/swap-nodes-in-pairs/

24. Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:

Input: head = [1,2,3,4]
Output: [2,1,4,3]
Example 2:

Input: head = []
Output: []
Example 3:

Input: head = [1]
Output: [1]


Constraints:

The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100
Accepted
1M
Submissions
1.7M
Acceptance Rate

 */

const {ListNode, printList, populateLinkedList} = require('../utils/linkedlist_utils')

const swapPairs = (head) => {
  const dummyHead = new ListNode(0, head);
  let cur = dummyHead;

  while (cur.next && cur.next.next) {
    let first = cur.next;
    let second = cur.next.next;
    let temp = cur.next.next.next;
    cur.next = second;
    second.next = first;
    first.next = temp;
    cur = first;
  }

  return dummyHead.next;
}

printList(swapPairs(populateLinkedList([1, 2, 3, 4])));

