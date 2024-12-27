/*
https://leetcode.com/problems/binary-tree-level-order-traversal/description/

102. Binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []

 */

import {mockTree} from "../utils/tree_utils.js";

const levelOrder = (root) => {
  const h = height(root);

  for (let i = 0; i < h; i++) {
    printGivenLevel(root, i);
  }
}

const printGivenLevel = (node, currentLevel) => {
  if (node === null) {
    return
  }

  if (currentLevel === 0) {
    console.log(node.val)
  }

  printGivenLevel(node.left, currentLevel - 1)
  printGivenLevel(node.right, currentLevel - 1)
}

const height = (root) => {
  if (!root) return 0;

  return 1 + Math.max(height(root.left), height(root.right))
}

const root = mockTree();
levelOrder(root);