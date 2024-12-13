/*
https://leetcode.com/problems/reverse-linked-list/description/

206. Reverse Linked List
Solved
Easy
Topics
Companies
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:

Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []

 */

const {populateLinkedList, printList} = require('../utils/linkedlist_utils')

const reverseList = function(head) {
  if(!head) return head;

  let left = null;
  let right = null
  let current = head;

  while(current !== null) {
    right = current.next;

    current.next = left;
    left = current;
    current = right;
  }

  return left;
};

printList(reverseList(populateLinkedList([1,2,3,4,5])));