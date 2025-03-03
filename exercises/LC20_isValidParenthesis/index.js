// Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

const isValid = (s) => {
  if (s.length % 2 !== 0) return false;

  const hashMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]]) {
      stack.push(s[i]);
    } else if (hashMap[stack.pop()] !== s[i]) {
      return false;
    }
  }

  return stack.length === 0;
};

module.exports = isValid;

console.log(isValid("(]"));
// console.log(isValid("()[]{}"));
// console.log(isValid("{[]}"));
