/*
https://leetcode.com/problems/subarray-sum-equals-k/description/

560. Subarray Sum Equals K

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2


Constraints:

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107
 */

const subarraySum = function (nums, k) {
  if (!nums) return 0;
  if (nums.length === 1 && nums[0] === k) return 1;

  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      if (sum === k) {
        count++;
      }
    }
  }

  return count;
};

// console.log(subarraySum([3, 2, 1], 3))
// console.log(subarraySum([1, 1, 1], 2))
console.log(subarraySum([1, 2, 1, 2, 1], 3))