/*
https://leetcode.com/problems/majority-element/description/

169. Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109


Follow-up: Could you solve the problem in linear time and in O(1) space?
 */

const majorityElement = (arr) => {
  const map = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1
    return acc;
  }, {});

  for (let key in map) {
    if (map[key] > Math.floor(arr.length / 2)) return parseInt(key)
  }

  return 0;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
console.log(majorityElement([3, 2, 3]))
