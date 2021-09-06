function getHeavier(w1, w2, w3) {
  return w1 > w2 ? w1 : w2 > w3 ? w2 : w3;
}

console.log(getHeavier(12, 45, 70));