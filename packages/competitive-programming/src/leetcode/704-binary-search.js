/*
704. Binary Search

https://leetcode.com/problems/binary-search/

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.



Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1


Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
 */

const search = (nums, target) => {
  let low = 0;
  let high = nums?.length - 1;
  return {
    iterative: searchIterative(nums, target, low, high),
    recursive: searchRecursive(nums, target, low, high)
  };
};

const searchIterative = (nums, target, low, high) => {
  let index = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      index = mid;
      break;
    } else if (nums[mid] > target) { // check left
      high = mid - 1;
    } else { // check right
      low = mid + 1;
    }
  }

  return index;

}

const searchRecursive = (nums, target, low, high) => {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      return searchRecursive(nums, target, low, mid - 1);
    } else {
      return searchRecursive(nums, target, mid + 1, high);
    }
  }

  return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9))
console.log(search([-1, 0, 3, 5, 9, 12], 12))
console.log(search([-1, 0, 3, 5, 9, 12], -1))
console.log(search([], -1))
console.log(search(null, -1))