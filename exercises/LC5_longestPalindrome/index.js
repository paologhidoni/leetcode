//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {
  let startIndex = 0;
  let maxLength = 1;

  // this function checks, for an individual character, how long is the longest palidrome around it, if it is longer that the current maxLength, it updates it and switches the startIndex to point at the current further left we could expand frm the current character (we will use these two to slice out string at the end to extract the longest palindrome). Then it tries expanding even more left and right.
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentPalLength = right - left + 1; // see explanation for this line down below
      if (currentPalLength > maxLength) {
        maxLength = currentPalLength;
        startIndex = left;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i - 1, i + 1);
    expandAroundCenter(i, i + 1); // this is to take into account strings with even length
  }

  return s.slice(startIndex, startIndex + maxLength);
}

module.exports = longestPalindrome;

/* 
*** currentPalLength ***:

This line calculates the length of the current palindrome being explored in the expandAroundCenter function.

Let's break it down:

right - left: This calculates the distance between the right index and the left index. This distance represents the number of characters between the two indices (inclusive of both indices).

+ 1: Since the distance between the right and left indices represents the number of characters between them, adding 1 includes the characters at both the right and left indices themselves, making sure the length of the palindrome is accurate.
For example, if right is 5 and left is 2, right - left would be 3. But in a string, characters are indexed starting from 0, so the actual length between indices 5 and 2 (inclusive) is 4 characters. Adding 1 compensates for this indexing difference, giving the correct length of 4 for the palindrome.

So, currentPalLength stores the length of the palindrome currently being explored in the expandAroundCenter function.


*** RAPRESENTATION: ***

a  b  b  a
^        ^
|        |
left   right


The letters "a", "b", "b", and "a" represent the characters of the string.
The left pointer points to the character at the left end of the current substring being considered.
The right pointer points to the character at the right end of the current substring being considered.
The "^" symbol indicates the positions of the pointers.
During the execution of the expandAroundCenter function, the pointers left and right would move towards each other, checking if the characters at these positions are equal and if they are within the bounds of the string. If they are equal, the function would expand the palindrome and update maxLength and startIndex if a longer palindrome is found.

*/
