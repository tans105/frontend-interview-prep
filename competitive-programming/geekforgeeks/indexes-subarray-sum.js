/*
https://www.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1

Indexes of Subarray Sum
Difficulty: MediumAccuracy: 16.5%Submissions: 1.7MPoints: 4
Given an unsorted array arr containing only non-negative integers, your task is to find a continuous subarray (a contiguous sequence of elements) whose sum equals a specified value s. You need to return the 1-based indices of the leftmost and rightmost elements of this subarray.

Examples:

Input: arr[] = [1,2,3,7,5], s = 12
Output: [2, 4]
Explanation: The sum of elements from 2nd to 4th position is 12.

Input: arr[] = [1,2,3,4,5,6,7,8,9,10], s = 15,
Output: [1, 5]
Explanation: The sum of elements from 1st to 5th position is 15.

Input: arr[] = [7,2,1], s = 2
Output: [2, 2]
Explanation: The sum of elements from 2nd to 2nd position is 2.

Input: arr[] = [5,3,4], s = 2
Output: -1
Explanation: There is no subarray with sum 2.

Constraints:
1 <= arr.size()<= 106
0 <= arr[i] <= 103
0 <= s <= 109
 */

const indexesSubarraySum = (nums, target) => {
  if (!nums || !nums.length) return -1;

  if (nums.length === 1 && nums[0] === target) return [0, 0];

  let i = 0;
  let j = 1;
  let sum = nums[i] + nums[j];

  while (i <= nums.length) {
    if (i === j) {
      if (nums[i] === target) return [i + 1, i + 1];
      j++;
      continue;
    }

    if (sum === target) {
      return [i + 1, j + 1];
    }

    if (sum < target) {
      j++;
      sum += nums[j];

    } else {
      sum -= nums[i];
      i++;
    }
  }

  return -1;
}

console.log(indexesSubarraySum([1, 2, 3, 7, 5], 12));
console.log(indexesSubarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15));
console.log(indexesSubarraySum([7, 2, 1], 2));
console.log(indexesSubarraySum([5, 3, 4], 2));