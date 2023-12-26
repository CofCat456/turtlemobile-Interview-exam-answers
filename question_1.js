const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateSum(N, count = 1, sum = 0) {
  if (N < count) return N === 1 ? 1 : sum + 2

  return calculateSum(N, count + 1, sum + ((-1) ** count) * count)
}

readline.question('輸入 N：', N => {
  console.log(`Result：${calculateSum(Number(N))}`)
  readline.close();
});
