/*
https://leetcode.com/problems/insert-interval/description/

57. Insert Interval

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Note that you don't need to modify intervals in-place. You can make a new array and return it.



Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].


Constraints:

0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 105
intervals is sorted by starti in ascending order.
newInterval.length == 2
0 <= start <= end <= 105
 */

const insert = (intervals, newInterval) => {
  intervals.sort((a, b) => a[0] - b[0]);

  let basePushed = false;
  let base = newInterval;
  const stack = [];

  intervals.forEach(([a0, a1]) => {
    const [b0, b1] = base;

    if ((b0 <= a1 && b1 >= a1) || (b0 <= a0 && b1 >= a0) || (a0 <= b1 && a1 >= b1) || (a0 <= b0 && a1 >= b0)) {
      base = [Math.min(a0, b0), Math.max(a1, b1)];
    } else if (a1 <= b0) {
      stack.push([a0, a1])
    } else if (a0 >= b1) {
      if (!basePushed) {
        stack.push(base);
        basePushed = true;
      }
      stack.push([a0, a1])
    }
  })

  if (!basePushed) stack.push(base);

  return stack;
}

// console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))
// console.log(insert([[1, 3], [6, 9]], [2, 5]))
// console.log(insert([], [2, 5]))
console.log(insert([[1, 5]], [2, 3]))