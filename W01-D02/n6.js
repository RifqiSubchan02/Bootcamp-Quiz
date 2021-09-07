// Cara 1
let prime = [];
let show = "";
function showPrimeNumber(n) {
  if (isNaN(n)) return "value must a number";
  for (let i = 1; i <= n; i++) {
    if ((i != 1 && i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) || i === 2 || i === 3 || i === 5 || i === 7)
      prime.push(i);
  }
  for (let i = 1; i <= prime.length; i++) {
    show += prime[i - 1] + " \t";
    if (i % 5 === 0) {
      show += "\n";
    }
  }
  return show;
}

console.log(showPrimeNumber(100));


// Cara 2
function printPrimeNumber(n) {
  let prime = "";
  let count = 0;

  for (let i = 2; i < n; i++) {
    if (isPrimeNumber(i)) {
      prime = count % 5 === 0 ? prime + "\n" + i : prime + "\t" + i;
      count++;
    }
  }
  return prime;
}

function isPrimeNumber(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(printPrimeNumber(100));