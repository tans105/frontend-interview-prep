/*
https://leetcode.com/problems/ransom-note/description/

383. Ransom Note
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.



Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true


Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
 */

const canConstruct = function (ransomNote, magazine) {
  const alphabetMap = Array(26).fill(0);

  for (const char of magazine) {
    alphabetMap[char.charCodeAt(0) - 97]++;
  }

  for (const char of ransomNote) {
    const index = char.charCodeAt(0) - 97;
    if (alphabetMap[index] === 0) return false;
    alphabetMap[index]--;
  }

  return true;
};

console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));