// Time Complexity -> O(2^n) Exponential time complexity
// Space Complexity -> O(n)
const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

// memoization
//      js object, keys will be arg to fn, value will be the return value

const fibMemo = (n, memo = {}) => {
  if (n in memo) return memo[n]; // memo checking logic
  if (n <= 2) return 1;
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
};

console.log(fibMemo(50));
