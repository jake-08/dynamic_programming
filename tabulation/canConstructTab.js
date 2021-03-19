// m = target
// n = wordBank.length
// Time complexity = O(m^2n)
// Space complexity = O(m)

const canContruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= target.length; i++) {
        if (table[i] === true) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }
            }
        }
    }
    return table[target.length];
}

console.log(canContruct('', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canContruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));