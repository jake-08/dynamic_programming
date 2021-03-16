// Time complexity -> O(2^(n+m))
// Space complexity -> O(n + m)
const gridTraveler = (m, n) => {
  if (m == 0 || n == 0) return 0;
  if (m == 1 && n == 1) return 1;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

//girdTravelerMemo(m, n) == gridTravelerMemo(n, m)
// Time Complexity -> O(n * m)
// Space Complexity -> O(n + m)
const gridTravelerMemo = (m, n, memo = {}) => {
  const key = m + "," + n;

  if (key in memo) return memo[key];
  if (m == 0 || n == 0) return 0;
  if (m == 1 && n == 1) return 1;

  memo[key] = gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m, n - 1, memo);
  return memo[key];
};

console.log(gridTravelerMemo(20, 30));
