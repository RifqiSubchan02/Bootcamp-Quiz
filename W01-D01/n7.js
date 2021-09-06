let sum = 0;
function sumDigit(n) {
  while (n != 0) {
    sum = sum + n % 100;
    n = n / 10;
  }
  return sum;
}

console.log(sumDigit(253));