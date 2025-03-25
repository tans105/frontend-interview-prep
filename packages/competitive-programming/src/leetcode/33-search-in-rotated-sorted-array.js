/*
https://leetcode.com/problems/search-in-rotated-sorted-array/

33. Search in Rotated Sorted Array

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1


Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104
 */

const search = (nums, target) => {
  const pivot = getPivot(nums);

  if (pivot === -1) {
    return binarySearch(nums, target);
  }

  if (target > nums[0]) {
    return binarySearch(nums, target, 0, pivot)
  } else {
    return binarySearch(nums, target, pivot)
  }
}

const getPivot = (nums) => {
  let index = -1;
  let left = 0;
  let right = nums.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid - 1 > 0 && nums[mid] < nums[mid - 1]) {
      return mid
    } else if (nums[mid] < nums[0]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

const binarySearch = (nums, target, low, high) => {
  let left = low || 0;
  let right = high || nums.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 1));
console.log(search([1], 0));