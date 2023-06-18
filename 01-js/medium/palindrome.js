/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^0-9a-z]/g, "");
  console.log(str);
  let len = str.length;
  let l = 0;
  let r = len - 1;
  while (l <= r) {
    if (str[l] !== str[r]) {
      return false;
    }
    r--;
    l++;
  }

  return true;
}
isPalindrome("race car");

module.exports = isPalindrome;
