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
