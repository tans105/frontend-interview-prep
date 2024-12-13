/*
https://leetcode.com/problems/valid-palindrome/

125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.


Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
 */

const isPalindrome = (s) => {
  if(!s || s.trim().length === 0 || s === '') return false;

  let isPalindrome = false;
  s = s.toLowerCase().trim();

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    const left = s.charCodeAt(i);
    const right = s.charCodeAt(j);
    const leftValid = left - 97 >= 0 && left - 97 < 26;
    const rightValid = right - 97 >= 0 && right - 97 < 26;

    if (!leftValid) {
      i++;
    }
    if (!rightValid) {
      j--;
    }

    if (leftValid && rightValid) {
      if (left !== right) {
        isPalindrome = false;
        break;
      } else {
        isPalindrome = true;
        i++;
        j--;
      }
    }
  }

  return isPalindrome;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('.,'))
console.log(isPalindrome(' '))