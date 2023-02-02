/*

https://leetcode.com/problems/palindrome-number/

9. Palindrome Number
Easy

Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    if(x === null || x === undefined) return false;

    const xReverse = x.toString().split('').reverse().join('');
    return x == xReverse;
};

console.log(isPalindrome(121));
console.log(isPalindrome(123));
console.log(isPalindrome(-121));
console.log(isPalindrome(0));
console.log(isPalindrome(null));