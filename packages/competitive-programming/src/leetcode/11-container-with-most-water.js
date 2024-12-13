/*
https://leetcode.com/problems/container-with-most-water/

11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1


Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
 */

const maxArea = (H) => {
  let ans = 0, i = 0, j = H.length - 1
  while (i < j) {
    ans = Math.max(ans, Math.min(H[i], H[j]) * (j - i))
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    H[i] <= H[j] ? i++ : j--
  }
  return ans
}

console.log(maxArea([3, 0, 2, 0, 4]))
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))