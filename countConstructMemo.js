// Time Complexity = O(n^m * m)
// Space Complexity = O(m^2)
const countConstruct = (target, wordBank) => {
  if (target === "") return 1;

  let totalCount = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numWaysForRest = countConstruct(target.slice(word.length), wordBank);
      totalCount += numWaysForRest;
    }
  }

  return totalCount;
};

// Time Complexity = O(n * m^2)
// Space Complexity = O(m^2)
const countConstructMemo = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let totalCount = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numWaysForRest = countConstructMemo(target.slice(word.length), wordBank, memo);
      totalCount += numWaysForRest;
    }
  }

  memo[target] = totalCount;
  return totalCount;
};

console.log(countConstruct("purple", ["pu", "pl", "purp", "le", "rp"]));
console.log(countConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));
