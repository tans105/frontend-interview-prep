/*
https://leetcode.com/problems/longest-common-prefix/

14. Longest Common Prefix
Easy

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
Accepted
2.1M
Submissions
5.2M
Acceptance Rate

*/

const longestCommonPrefix = (strs) => {
  if (strs === null || strs === undefined || strs.length === 0) return "";
  if(strs.length === 1) return strs[0]

  const first = strs[0];
  let longestCommonLength = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i < strs.length; i++) {
    let matching = 0;

    const word = strs[i];
    for (let j = 0; j < word.length; j++) {
      if (word[j] === first[j]) {
        matching++;
      } else {
        break;
      }
    }

    longestCommonLength = Math.min(longestCommonLength, matching)
  }

  return longestCommonLength === 0
    ? ""
    : first.slice(0,longestCommonLength);
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix(["ab", "a"]));
