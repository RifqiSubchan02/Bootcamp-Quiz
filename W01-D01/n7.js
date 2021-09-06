// Blm
let sum = 0;
function sumDigit(n) {
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    sum += parseInt(n.charAt(i));
  }
  return sum;
}

console.log(sumDigit(1234));