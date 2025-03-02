/*
  Two-pointer technique: You use two pointers, startPointer and endPointer, which begin at the two ends of the 
  string and move toward the center, checking for matching characters along the way.

  Linear time complexity (O(n)): The algorithm only traverses the string once (after cleaning), making it an O(n) 
  solution, where n is the length of the cleaned string.

  The two-pointer method works well when you're dealing with problems related to sorted arrays, 
  partitioning, or palindrome checking.
*/

function isPalindrome(s) {
  s = s.toLowerCase().replace(/[\W_]/g, "");

  let startPointer = 0;
  let endPointer = s.length - 1;

  while (startPointer < endPointer) {
    if (s[startPointer] !== s[endPointer]) return false;
    startPointer++;
    endPointer--;
  }

  return true;
}

// function isPalindrome(s) {
//   const regex = /[a-zA-Z]/;
//   s = s
//     .toLowerCase()
//     .split("")
//     .filter((char) => char.match(regex));

//   let endPointer = s.length - 1;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== s[endPointer]) {
//       return false;
//     } else {
//       endPointer -= 1;
//     }
//   }
//   return true;
//   console.log(s, endPointer, "************");
// }

// function isPalindrome(s) {
//   const regex = /[^a-z]/g;
//   s = s.toLowerCase().replace(regex, "");

//   let endPointer = s.length - 1;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== s[endPointer]) {
//       return false;
//     }
//     endPointer -= 1;
//   }
//   return true;
// }

// function isPalindrome(s) {
//   const regex = /[a-zA-Z]/;
//   const targetWord = s
//     .toLowerCase()
//     .split("")
//     .filter((char) => char.match(regex))
//     .join("");

//   const revertedWord = targetWord.split("").reverse().join("");

//   return revertedWord === targetWord;
// }

module.exports = isPalindrome;
