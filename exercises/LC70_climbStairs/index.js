// Climbing Stairs

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:

// 1 <= n <= 45</Stairs>

/* FIBONACCI NUMBERS **************************************************************

Fibonacci numbers are a sequence of numbers where each number is the sum of the two preceding 
ones, starting from 0 and 1. The sequence goes like this:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

*/

const climbStairs = (n) => {
  // Base cases: if there are 1 or 2 steps, return n directly
  if (n <= 3) {
    return n;
  }

  // We initialize an array to store the number of ways to climb up to n steps.
  // The first few values follow the Fibonacci pattern:
  let combos = [0, 1, 2, 3]; // combos[1] = 1 way, combos[2] = 2 ways, combos[3] = 3 ways

  // We build up the number of ways for each step using the Fibonacci relation:
  for (let i = 4; i <= n; i++) {
    // The number of ways to reach step i is the sum of:
    // - Ways to reach step (i - 1) and take 1 step
    // - Ways to reach step (i - 2) and take 2 steps
    combos.push(combos[i - 1] + combos[i - 2]);
  }

  // The final value at index 'n' is the total ways to reach step 'n'
  return combos[n];
};

// Example usage:
console.log(climbStairs(5)); // Output: 8

/*
  Explanation:
  - We can only take 1 or 2 steps at a time.
  - To reach step 'n', we must have come from 'n-1' (single step) or 'n-2' (double step).
  - This results in the Fibonacci-like formula: f(n) = f(n-1) + f(n-2).
  - The base cases:
    f(1) = 1  (only one way: [1])
    f(2) = 2  (two ways: [1,1], [2])
    f(3) = 3  (three ways: [1,1,1], [1,2], [2,1])
    f(4) = 5  (five ways: [1,1,1,1], [1,1,2], [1,2,1], [2,1,1], [2,2])
    f(5) = 8  (eight ways: see breakdown)
  - This follows the Fibonacci sequence: 1, 2, 3, 5, 8, 13, ...
  
  Visualization of step choices:
          f(4)
         /    \
      f(3)   f(2)
     /    \   /   \
   f(2)  f(1) f(1) f(0)
  
  Each call branches into `f(n-1)` and `f(n-2)`, forming the Fibonacci pattern.
  
  Optimization:
  - Instead of recomputing values, we store them in an array to avoid duplicate calculations.
  - This converts the exponential recursive solution into an efficient O(n) iterative solution.
  */

/*
  - The climbing stairs problem follows the Fibonacci sequence because:
    - You can reach `n` from `n-1` (single step) or `n-2` (double step).
    - This forms the same recurrence relation as Fibonacci: f(n) = f(n-1) + f(n-2).
    - The number of ways to reach `n` is the nth Fibonacci number.
  */

// Example usage:
console.log(climbStairs(5)); // Output: 8
module.exports = climbStairs;
