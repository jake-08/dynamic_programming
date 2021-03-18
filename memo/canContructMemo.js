// m = target.length (height of the tree)
// n = wordBank.length
// Time Complexity = O(n^m * m) time
// Space Complexity = O(m^2)
const canContruct = (target, wordBank) => {
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canContruct(suffix, wordBank) === true) {
        return true;
      }
    }
  }

  return false;
};
// Time Complexity = O(n * m^2)
// Space Complexity = O(m^2)
const canContructMemo = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canContructMemo(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

console.log(canContructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));
