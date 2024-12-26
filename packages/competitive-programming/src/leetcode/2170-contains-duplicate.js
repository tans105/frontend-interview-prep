/*
https://leetcode.com/problems/contains-duplicate/description/

217. Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const containsDuplicate = (nums) => {
  const numMap = nums.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc
  }, {});

  let hasDuplicate = false;

  for (let key in numMap) {
    if (numMap[key] > 1) hasDuplicate = true
  }

  return hasDuplicate
}

const containsDuplicate2 = (nums) => {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) return true;

    set.add(num);
  }

  return false;
}

console.log(containsDuplicate2([1, 2, 3]))