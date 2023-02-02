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
  let pivot = -1;
  let index = -1;
  getPivot(nums, 0, nums.length - 1);

  if (pivot === -1) {
    binarySearch(nums, 0, nums.length - 1)
  } else if (nums[pivot] >= target) {
    binarySearch(nums, pivot + 1, nums.length - 1);
  } else {
    binarySearch(nums, 0, pivot - 1);
  }

  return index;

  function getPivot(nums, low, high) {
    if (nums.length === 1) {
      return;
    }

    const mid = Math.floor((low + high) / 2);

    if (mid > 0 && nums[mid - 1] > nums[mid]) {
      pivot = mid - 1;
    } else if (nums[mid] > nums[high]) {
      getPivot(nums, mid, high);
    } else if (nums[mid] < nums[low]) {
      getPivot(nums, low, mid);
    }
  }

  function binarySearch(nums, low, high) {
    if (low > high) {
      return;
    }

    const mid = (low + high) / 2;

    if (target === nums[mid]) {
      index = mid;
    } else if (target < nums[mid]) {
      return binarySearch(nums, low, mid - 1, target);
    } else {
      return binarySearch(nums, mid + 1, high, target);
    }
  }
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 1));
console.log(search([1], 0));