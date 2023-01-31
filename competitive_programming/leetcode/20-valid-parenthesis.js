/*
20. Valid Parentheses
https://leetcode.com/problems/valid-parentheses/
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */

const isValid = (s) => {
  const parenthesis = s.split('');
  const stack = [];

  for (let i = 0; i < parenthesis.length; i++) {
    const top = stack[stack.length - 1];
    const current = parenthesis[i];

    if(current === complement[top]) {
      stack.pop();
      continue;
    }

    stack.push(current);
  }

  return stack.length === 0;
};

const complement = {
  '(': ')',
  '[': ']',
  '{': '}'
}

console.log(isValid('()'));
console.log(isValid('(('));
console.log(isValid(''));
console.log(isValid('()[]{}'))
console.log(isValid('()['))