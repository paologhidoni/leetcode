// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/* SOLUTION 1 */

// function groupAnagrams(strs) {
//   let hashMap = {};

//   const sortedSs = strs.map((str) => str.split("").sort().join(""));
//   for (let i = 0; i < sortedSs.length; i++) {
//     hashMap[sortedSs[i]] = [...(hashMap[sortedSs[i]] || []), strs[i]];
//   }

//   return Object.values(hashMap);
// }

/* SOLUTION 2 - better performance, single loop */
function groupAnagrams(strs) {
  let hashMap = {};

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const key = strs[i].split("").sort().join("");
    hashMap[key] = [...(hashMap[key] || []), word];
  }

  return Object.values(hashMap);
}

module.exports = groupAnagrams;

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
