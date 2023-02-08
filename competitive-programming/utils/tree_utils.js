class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

const traverse = node => {
  const array = [];
  inOrderTraversal(node, array);
  console.log(array);
}

const inOrderTraversal = (node, array) => {
  if (node === null) {
    return;
  }

  inOrderTraversal(node.left, array);
  array.push(node.val);
  inOrderTraversal(node.right, array);
}

const levelOrderTraversal = (root) => {
  const height = getHeight(root);
  const levels = [];
  for (let i = 0; i < height; i++) {
    printGivenLevel(root, i, levels);
  }

  console.log(levels);
}

const printGivenLevel = (node, level, levels) => {
  if (node === null) {
    return;
  }

  if (level === 0) {
    levels.push(node.val);
  }

  printGivenLevel(node.left, level - 1, levels);
  printGivenLevel(node.right, level - 1, levels);
}

const getHeight = (root) => {
  if (root === null) {
    return 0;
  }

  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

const generateTreeFromArray = (arr) => {
  if (!arr || arr.length === 0) {
    return null;
  }

  const root = new TreeNode(arr[0]);

  if (arr.length === 1) {
    return root;
  }

  let currentIndex = 1;
  const queue = [root];

  while (currentIndex < arr.length) {
    const parent = queue.shift();

    let node = new TreeNode(arr[currentIndex]);
    parent.left = node;
    queue.push(node);
    currentIndex++;

    node = new TreeNode(arr[currentIndex]);
    parent.right = node;
    queue.push(node);
    currentIndex++;
  }

  return root;
}

const mockTree = () => {
  //            0
  //         /    \
  //       1       2
  //     /   \   /   \
  //    3    4  5     6
  //   /
  //  7
  const root = new TreeNode(0);
  root.left = new TreeNode(1);
  root.right = new TreeNode(2);
  root.left.left = new TreeNode(3);
  root.left.right = new TreeNode(4);
  root.right.left = new TreeNode(5);
  root.right.right = new TreeNode(6);
  root.left.left.left = new TreeNode(7);

  return root;
}

module.exports = {
  TreeNode, generateTreeFromArray, traverse, mockTree, inOrderTraversal, getHeight, levelOrderTraversal
}