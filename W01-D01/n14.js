let progress = 0;
function getProsentase(income1, income2) {
  if (isNaN(income1) || isNaN(income2)) return `${income1} or ${income2} must be number`;
  if (income1 > income2) {
    progress = Math.round(100 / (income2 / (income1 - income2)));
    return `Total penurunan income -${progress}%`;
  } else if (income1 < income2) {
    progress = Math.round(100 / (income1 / (income2 - income1)));
    return `Total kenaikan income ${progress}%`;
  } else {
    return `Tidak ada kenaikan maupun penurunan`;
  }
}

console.log(getProsentase("abc", "bca"));
console.log(getProsentase(600000.00, 750000.00));
console.log(getProsentase(750000.00, 650000.00));