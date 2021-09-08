const numbers = [2, 42, 5, 304, 1, 13];
function maxNumber(arrays) {
  let max = 0;
  for (let i = 0; i < arrays.length; i++) {
    if (max < arrays[i]) max = arrays[i];
  }
  return max;
}

console.log(maxNumber(numbers));