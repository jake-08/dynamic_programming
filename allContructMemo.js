// m = target.length
// n = wordBank.length
// Time Complexity = O(n^m)
// Space Complexity = O(m)
const allConstruct = (target, wordBank) => {
  if (target === "") return [[]];

  const result = [];

  for (let  word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }

  return result;
};

// Time Complexity = O(n^m)
// Space Complexity = O(m)
const allConstructMemo = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  const result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstructMemo(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }

  memo[target] = result;
  return result;
};

console.log(allConstruct("abcd", ["ab", "cd", "abc", "d", "a", "bcd"]));
