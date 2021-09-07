let hasil = "";
for (let i = 7; i > 0; i--) {
  for (let j = 1; j < i; j++) {
    hasil += j;
    hasil += " ";
  }
  hasil += "\n";
}
for (let k = 5; k > 0; k--) {
  for (let l = 0; l < k; l++) {
    hasil += k - l;
    hasil += " ";
  }
  hasil += "\n";
}
console.log(hasil);