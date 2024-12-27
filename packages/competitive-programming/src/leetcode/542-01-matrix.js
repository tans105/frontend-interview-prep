/*
https://leetcode.com/problems/01-matrix/description/

542. 01 Matrix

Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

Example 1:


Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]
Example 2:


Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]


Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 104
1 <= m * n <= 104
mat[i][j] is either 0 or 1.
There is at least one 0 in mat.
 */

const safeParse = (matrix, i, j) => {
  const row = matrix.length;
  const column = matrix[0].length;

  if (i < 0 || j < 0 || i >= row || j >= column) return Infinity;

  return matrix[i][j];
}

const updateMatrix = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // First pass: top-left to bottom-right
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) continue;

      matrix[i][j] = 1 + Math.min(
        safeParse(matrix, i - 1, j), // From top
        safeParse(matrix, i, j - 1) // From left
      );
    }
  }

  // Second pass: bottom-right to top-left
  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 0; j--) {
      if (matrix[i][j] === 0) continue;

      matrix[i][j] = Math.min(
        matrix[i][j], // Current value
        1 + safeParse(matrix, i + 1, j), // From bottom
        1 + safeParse(matrix, i, j + 1) // From right
      );
    }
  }

  return matrix;
};


console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]))
console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [0, 0, 0]]))