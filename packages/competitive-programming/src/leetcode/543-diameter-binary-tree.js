/*
https://leetcode.com/problems/diameter-of-binary-tree/description/

543. Diameter of Binary Tree

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

Example 1:

Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
Example 2:

Input: root = [1,2]
Output: 1


Constraints:

The number of nodes in the tree is in the range [1, 104].
-100 <= Node.val <= 100
 */

import {generateTreeFromArray, mockTree} from "../utils/tree_utils.js";

const diameterOfBinaryTree = function (root) {
  if (!root) return 0;

  const lHeight = height(root.left);
  const rHeight = height(root.right);

  const lDiameter = diameterOfBinaryTree(root.left);
  const rDiameter = diameterOfBinaryTree(root.right);

  return Math.max(lDiameter, rDiameter, lHeight + rHeight)
};

const height = (node) => {
  if (!node) return 0;

  return 1 + Math.max(height(node.left), height(node.left))
}

console.log(diameterOfBinaryTree(mockTree()))
console.log(diameterOfBinaryTree(generateTreeFromArray([1, 2, 3, 4, 5])))