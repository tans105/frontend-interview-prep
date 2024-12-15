/*
https://leetcode.com/problems/add-binary/description/

67. Add Binary

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"


Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
 */

const addBinary = function (a, b) {
  let carry = 0;
  let res = '';
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;
    if (i >= 0) sum += parseInt(a[i]);
    if (j >= 0) sum += parseInt(b[j]);

    res += (sum % 2);
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  return res.split('').reverse().join('');
};


console.log(addBinary('11', '1'))

