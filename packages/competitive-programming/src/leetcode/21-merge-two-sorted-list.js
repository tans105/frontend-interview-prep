/*
21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
 */

import { ListNode, populateLinkedList, printList } from '../utils/linkedlist_utils.js';

const mergeTwoLists = (n1, n2) => {
  const head = new ListNode(-1, null);
  let n = head;

  while (n1 !== null && n2 !== null) {
    if (n1.val <= n2.val) {
      n.next = new ListNode(n1.val);
      n1 = n1.next;
    } else {
      n.next = new ListNode(n2.val);
      n2 = n2.next;
    }

    n = n.next;
  }

  while (n1 !== null) {
    n.next = new ListNode(n1.val);
    n1 = n1.next;
    n = n.next;
  }

  while (n2 !== null) {
    n.next = new ListNode(n2.val);
    n2 = n2.next;
    n = n.next;
  }

  return head.next;
}

const list1 = populateLinkedList([-9, 3]);
const list2 = populateLinkedList([5, 7]);

printList(mergeTwoLists(list1, list2))

