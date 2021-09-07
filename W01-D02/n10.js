function findSum(arr, sum) {
  let value = [];
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        value.push(`${arr[i]} + ${arr[j]}`);
      }
    }
  }

  let word = "";
  for (let i = 0; i < value.length / 2; i++) {
    word += `${value[i]} = 9 \n`;

  }
  return word;
}

console.log(findSum([1, 2, 3, 4, 5, 6], 9));