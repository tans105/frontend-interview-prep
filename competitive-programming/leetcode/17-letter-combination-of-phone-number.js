/**
 https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 17. Letter Combinations of a Phone Number
 Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
 A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 Example 1:
 Input: digits = "23"
 Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 Example 2:
 Input: digits = ""
 Output: []
 Example 3:
 Input: digits = "2"
 Output: ["a","b","c"]
 Constraints:
 0 <= digits.length <= 4
 digits[i] is a digit in the range ['2', '9'].
 Accepted
 1.5M
 Submissions
 2.6M
 Acceptance Rate
 */

const combinations = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
}

const letterCombinations = (digits) => {
  const digitsArray = digits.split('');
  let result = [];

  for (let i = 0; i < digitsArray.length; i++) {
    const set = combinations[digitsArray[i]];

    if (i === 0) {
      result = set;
    } else {
      result = permute(set, result);
    }
  }

  return result;
};

const permute = (set, result) => {
  const temp = [];
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < set.length; j++) {
      temp.push(result[i] + set[j]);
    }
  }

  return temp;
}

console.log(letterCombinations('23'));
console.log(letterCombinations(''));
console.log(letterCombinations('2'));
console.log(letterCombinations('987'));