/*
19. Remove Nth Node From End of List

https://leetcode.com/problems/remove-nth-node-from-end-of-list/
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]


Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz


Follow up: Could you do this in one pass?
 */

import { populateLinkedList, printList } from '../utils/linkedlist_utils.js';

const removeNthFromEnd = (head, n) => {
  let slow = head;
  let fast = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (fast == null) {
    head = head.next;
    return head;
  }

  while (fast.next != null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
  return head;
}

const head = populateLinkedList([1, 2, 3, 4, 5]);
printList(removeNthFromEnd(head, 5));
printList(removeNthFromEnd(head, 4));