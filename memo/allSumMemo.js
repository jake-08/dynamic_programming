const allSum = (targetSum, numbers) => {
  if (targetSum == 0) return [[]];
  if (targetSum < 0) return null;

  let result = [];

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = allSum(remainder, numbers);
    if (remainderCombination !== null) {
      const combination = remainderCombination.map((numArr) => [num, ...numArr])
      result.push(...combination);
    }
  }
  return result;
};

const allSumMemo = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum];
  if (targetSum == 0) return [[]];
  if (targetSum < 0) return null;

  let result = [];

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = allSumMemo(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = remainderCombination.map((numArr) => [num, ...numArr])
      result.push(...combination);
    }
  }

  memo[targetSum] = result;
  return result;
};

console.log(allSum(120, [2, 20, 40, 60]));