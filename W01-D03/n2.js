function range(...numbers) {
  let str = "[";
  if (numbers.length === 0) return "Parameter range harus diisi";
  if (numbers.length > 2) return "Parameter range tidak boleh lebih dari 2";
  if (numbers.length === 1) {
    for (let i = 1; i <= numbers; i++) {
      str += i;
      if (numbers != i) {
        str += ",";
      }
    }
    str += "]";
  } else {
    for (let i = numbers[0]; i < numbers[1]; i++) {
      str += i;
      if (numbers[1] - i != 1) {
        str += ",";
      }
    }
    str += "]";
  }
  return str;
}

console.log(range(9));
console.log(range(5, 9));