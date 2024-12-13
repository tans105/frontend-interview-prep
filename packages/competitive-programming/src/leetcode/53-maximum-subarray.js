/*
https://leetcode.com/problems/maximum-subarray/description/

53. Maximum Subarray
Given an integer array nums, find the subarray with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 */


const maxSubArray = function (nums) {
  if (!nums || !nums.length) return 0;

  let maxSoFar = Number.NEGATIVE_INFINITY;
  let maxTillNow = 0;

  for (let i = 0; i < nums.length; i++) {
    const sum = nums[i] + maxTillNow;

    maxSoFar = Math.max(maxSoFar, sum);

    if (sum < 0) maxTillNow = 0;
    else maxTillNow = sum;
  }

  return maxSoFar;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([1]))
console.log(maxSubArray([5, 4, -1, 7, 8]))
console.log(maxSubArray([-1]))