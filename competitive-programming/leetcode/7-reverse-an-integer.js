/*
https://leetcode.com/problems/reverse-integer/

7. Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21


Constraints:

-231 <= x <= 231 - 1
Accepted
2.4M
Submissions
8.9M
Acceptance Rate
27.3%
 */

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  if (!x) {
    return x;
  }

  let isNegative = false;
  if (x < 0) {
    x = x * -1;
    isNegative = true;
  }
  const reversed = Number(x.toString().split('').reverse().join(''));

  if(reversed > Math.pow(2, 31) - 1) return 0;

  return isNegative ? -1 * reversed : reversed;
};

console.log(reverse(123));
console.log(reverse(-123));