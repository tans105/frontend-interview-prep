/*
https://leetcode.com/problems/validate-binary-search-tree/description/

98. Validate Binary Search Tree

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left
subtree
 of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.


Example 1:


Input: root = [2,1,3]
Output: true
Example 2:


Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 */

import {inOrderTraversal, TreeNode} from "../utils/tree_utils.js";

const isValidBST = function (root) {
  const treeArray = [];
  inOrderTraversal(root, treeArray);

  let prev = Number.NEGATIVE_INFINITY;

  console.log(treeArray)

  for (let i = 0; i < treeArray.length; i++) {
    if (treeArray[i] <= prev) return false;

    prev = treeArray[i];
  }

  return true;
};

// const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
const root = new TreeNode(5);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(6)

console.log(isValidBST(root))

