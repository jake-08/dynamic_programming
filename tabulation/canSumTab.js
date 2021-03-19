// m = targetSum
// n = numbers.length
// Time Complexity = O(mn)
// Space Complexity = O(m)

const canSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true; 
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] === true) {
            for (let num of numbers) {
                table[i + num] = true; 
            }
        }
    }
    return table[targetSum];
}

console.log(canSum(7, [2, 4, 8]))