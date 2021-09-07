function strToDate(a) {
  const arr = a.split("/");
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) return `${a} is bad date format`;
  }
  const date = new Date(arr[2], arr[0] - 1, arr[1]);

  return `${date}`;
}

console.log(strToDate('12/30/2021'));
console.log(strToDate('12/aa/bb'));