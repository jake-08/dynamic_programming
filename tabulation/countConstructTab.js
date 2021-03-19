// m = target
// n = wordBank.length
// Time complexity = O(m^2n)
// Space complexity = O(m)

const countContruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                table[i + word.length] += table[i];
            }
        }
    }
    return table[target.length];
}

console.log(countContruct('purple', ['pu', 'pur', 'rl', 'e', 'r', 'ple']));
console.log(countContruct('purple', ['purp', 'p', 'ur', 'le', 'ple']));
console.log(countContruct('abcdef', ['ab', 'abc', 'c', 'cd', 'def', 'abcd', 'ef']));