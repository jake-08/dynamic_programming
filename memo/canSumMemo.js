// m = target sum
// n = length of array

// Time Complexity -> O(n^m)
// Space Complexity -> O(m)
const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers) === true) return true;
  }

  return false;
};

// Time Complexity -> O(m * n)
// Time Complexity -> O(m)
const canSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];

  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSumMemo(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }

  memo[targetSum] = false;
  return false;
};

console.log(canSumMemo(700, [2, 3, 4]));
