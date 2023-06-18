/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.lenght !== str2.lenght) return false;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const f = str1.split("").join("");
  const second = str2.split("").sort().join("");
  console.log(f);
}
console.log(isAnagram("Debit Card", "Bad Credit"));

module.exports = isAnagram;
