/*
https://leetcode.com/problems/course-schedule/description/

207. Course Schedule

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.



Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.


Constraints:

1 <= numCourses <= 2000
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique.
 */

const canFinish = (numCourses, prerequisites) => {
  const graph = prerequisites.reduce((acc, [course, prerequisite]) => {
    acc[course] = acc[course] || [];
    acc[course].push(prerequisite);
    return acc;
  }, {});

  const visited = new Set();
  const completed = new Set();

  const hasCycle = (course) => {
    if (visited.has(course)) return true;
    if (completed.has(course)) return false;

    visited.add(course);
    const dependencies = graph[course] || [];

    for (let prerequisite of dependencies) {
      if (hasCycle(prerequisite)) return true;
    }

    visited.delete(course);
    completed.add(course);

    return false;
  };

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false;
  }

  return true;
};

console.log(canFinish(2, [[1, 0], [0, 1]]))