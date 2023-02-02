/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/

3. Longest Substring Without Repeating Characters

Companies
Given a string s, find the length of the longest
substring
 without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
 */

const lengthOfLongestSubstring = (s) => {
  if (s === null || s === undefined || s.length === 0) {
    return 0;
  }
  if (s.length === 1) {
    return 1;
  }

  let longestLength = 1;
  const set = new Set([s[0]]);

  let i = 0, j = 1

  while (i !== s.length - 1) {
    if (j === s.length) {
      j = s.length - 1;
    }

    if (set.has(s[j])) {
      set.delete(s[i++]);
    } else {
      set.add(s[j++]);
    }

    longestLength = Math.max(longestLength, set.size);
  }

  return longestLength;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(null));
console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring('aa'));