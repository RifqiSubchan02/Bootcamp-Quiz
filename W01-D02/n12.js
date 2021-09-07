const fruitNamesA = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesB = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesC = ['anggur', 'apel', 'mangga', 'alpukat'];

function isArrayEqual(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) return false;
  }
  return true;
}

console.log(isArrayEqual(fruitNamesA, fruitNamesB));
console.log(isArrayEqual(fruitNamesA, fruitNamesC));