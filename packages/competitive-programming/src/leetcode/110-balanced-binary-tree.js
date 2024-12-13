/*
https://leetcode.com/problems/balanced-binary-tree/

110. Balanced Binary Tree

Given a binary tree, determine if it is
height-balanced
.
Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: true
Example 2:


Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
Example 3:

Input: root = []
Output: true


Constraints:

The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104
  */

import { generateTreeFromArray } from "../utils/tree_utils.js";

const isBalanced = (node) => {
  if (node === null) {
    return 1;
  }

  const heightLeft = height(node.left);
  const heightRight = height(node.right);

  return Math.abs(heightLeft - heightRight) <= 1
}

const height = (node) => {
  if (node === null) {
    return 0;
  }

  return Math.max(height(node.left), height(node.right)) + 1;
}

console.log(isBalanced(generateTreeFromArray([3, 9, 20, null, null, 15, 7])));