// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/* 1ST SOLUTION */

// function isAnagram(s, t) {
//   if (s.length !== t.length) return false;

//   const hashMap = { s1: {}, s2: {} };

//   for (let i = 0; i < s.length; i++) {
//     hashMap["s1"][s[i]] = hashMap["s1"][s[i]] + 1 || 1;
//     hashMap["s2"][t[i]] = hashMap["s2"][t[i]] + 1 || 1;
//   }

//   let i = 0;
//   while (i < s.length) {
//     if (hashMap["s1"][s[i]] !== hashMap["s2"][s[i]]) return false;
//     i++;
//   }
//   return true;
// }

/* BEST SOLUTION - less time & memory */
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let hashMap = {};

  for (let i = 0; i < s.length; i++) {
    hashMap[s[i]] = (hashMap[s[i]] || 0) + 1;
    hashMap[t[i]] = (hashMap[t[i]] || 0) - 1;
    console.log(i, hashMap);
  }

  for (let key in hashMap) {
    if (hashMap[key] !== 0) return false;
  }
  return true;
}

module.exports = isAnagram;

console.log(isAnagram("anagram", "nagaram"));
