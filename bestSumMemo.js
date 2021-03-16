// m = targetSum
// n = numbers.length
// Time Complexity = O(n^m * m) where the base is the branching factor, n. multiplying m is for copying remainderResult array.
// Space Complexity = O(m^2)
const bestSum = (targetSum, numbers) => {
  if (targetSum == 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }
  return shortestCombination;
};

// Time Complexity = O(m^2 * n)
// Space Complexity = O(m^2)
const bestSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum == 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSumMemo(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

console.log(bestSumMemo(100, [1, 25, 4, 3]));
