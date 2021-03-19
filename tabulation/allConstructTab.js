// m = target
// n = wordBank.length
// Time complexity = O(n^m) Exponential 
// Space complexity = O(n^m) Exponential

const allContruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill().map(() => []);
    table[0] = [[]];

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                const newCombinations = table[i].map(subArray => [...subArray, word]);
                table[i + word.length].push(...newCombinations);
            }
        }
    }
    return table[target.length];
}

console.log(allContruct('purple', ['pu', 'pur', 'rl', 'e', 'r', 'ple']));
console.log(allContruct('purple', ['purp', 'p', 'ur', 'le', 'ple']));
console.log(allContruct('abcdef', ['ab', 'abc', 'c', 'cd', 'def', 'abcd', 'ef']));
console.log(allContruct('xyz', ['ab', 'abc', 'c', 'cd', 'def', 'abcd', 'ef']));