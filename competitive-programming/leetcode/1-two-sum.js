/*
https://leetcode.com/problems/two-sum/
Easy

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
Accepted
8.7M
Submissions
17.6M
Acceptance Rate

*/

//Solution 1 - O(n^2)
const twoSum = function (nums, target) {
  if(!nums || nums.length < 2) return [];
  const map = new Map();
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if(map.has(target - nums[i])) {
      result[0] = map.get(target - nums[i]);
      result[1] = i;
      break;
    }

    map.set(nums[i], i);
  }

  return result;
};

//Solution 2 - O(n)
const twoSum2 = function (nums, target) {
  if(!nums || nums.length < 2) return [];

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result[0] = i;
        result[1] = j;
        break;
      }
    }
  }

  return result;
};

//Test
console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([3, 2, 4], 6));
console.log(twoSum2([3, 3], 6));
console.log(twoSum2(null, 0));
console.log(twoSum2([], 12));
console.log(twoSum2([1], 12));