/**
 * https://leetcode.com/problems/3sum/
 *
 * 15. 3Sum
 Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 Notice that the solution set must not contain duplicate triplets.
 Example 1:
 Input: nums = [-1,0,1,2,-1,-4]
 Output: [[-1,-1,2],[-1,0,1]]
 Explanation:
 nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 The distinct triplets are [-1,0,1] and [-1,-1,2].
 Notice that the order of the output and the order of the triplets does not matter.
 Example 2:
 Input: nums = [0,1,1]
 Output: []
 Explanation: The only possible triplet does not sum up to 0.
 Example 3:
 Input: nums = [0,0,0]
 Output: [[0,0,0]]
 Explanation: The only possible triplet sums up to 0.
 Constraints:
 3 <= nums.length <= 3000
 -105 <= nums[i] <= 105
 Accepted
 2.5M
 Submissions
 7.7M
 Acceptance Rate
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  const map = new Map();
  const set = new Set();

  nums.forEach((num, index) => {
    if (!map.has(num)) {
      map.set(num, []);
    }

    map.get(num).push(index);
    set.add(num);
  })

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = (nums[i] + nums[j]) * -1;

      if (set.has(sum)) {
        const indexes = map.get(sum);
        indexes.forEach(index => {
          if (index !== i && index !== j && index > i && index > j) {
            result.push([i, j, index]);
          }
        })
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))

