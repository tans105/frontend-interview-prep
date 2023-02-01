/*
https://leetcode.com/problems/generate-parentheses/

22. Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]


Constraints:

1 <= n <= 8
Accepted
1.3M
Submissions

 */

const generateParenthesis = (n) => {
  const result = [];
  breathFirstSearch("", 0, 0);
  return result;

  function breathFirstSearch(str, left, right) {
    if (left === n && right === n) {
      result.push(str);
      return;
    }
    if (left !== n) {
      breathFirstSearch(str + "(", left + 1, right);
    }
    if (left > right) {
      breathFirstSearch(str + ")", left, right + 1);
    }
  }
}

console.log(generateParenthesis(3));