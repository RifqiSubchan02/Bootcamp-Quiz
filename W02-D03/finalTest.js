// 1
function totalLompat(x, y, k) {
  let count = 0;
  if (y <= x) return `Target posisi tidak boleh <= posisi awal `;
  if (k <= 0) return `Jarak tempuh lompatan tidak boleh <= 0 `;
  for (let i = x; i < y; i += k) {
    count++;
  }
  return count;
};

console.log(totalLompat(10, 85, 30));

// 2
const arr = [3, 8, 9, 7, 6];
function rotateArray(array, k) {
  let str = `/**`
  let value = "";
  for (let i = 0; i < k; i++) {
    str += `\n\t[${arr}] => `;
    value = arr.pop();
    arr.unshift(value)
    str += `[${arr}]`;
  }
  str += "\n*/"
  return str;
};

console.log(rotateArray(arr, 3));

// 3
const array1 = ["Mangga", "Apel", "Melon", "Pisang", "Sirsak", "Tomat", "Nanas", "Nangka", "Timun", "Mangga"];
const array2 = ["Bayam", "Wortel", "Kangkung", "Mangga", "Tomat", "Kembang Kol", "Nangka", "Timun"];

function isSameOrDiff(arr1, arr2) {
  // Same
  const same = [];
  const arrSet1 = new Set();
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arrSet1.add(arr1[i])
      }
    }
  }
  arrSet1.forEach(el => same.push(el))


  // Different
  let isDifferent = true;
  const different = [];
  const arrSet2 = new Set(arr1);
  arr2.forEach(el => {
    arrSet2.add(el);
  })

  arrSet2.forEach(el => {
    isDifferent = true;
    same.forEach(el2 => {
      if (el === el2) {
        isDifferent = false
      }
    })
    if (isDifferent === true) {
      different.push(el)
    }
  })
  return `Same = [${same}] \nDifferent = [${different}]`;
}

console.log(isSameOrDiff(array1, array2));


// 4
function numberCascade(row, start) {
  // start -= 1
  let str = "";
  for (let i = 0; i <= row; i++) {
    for (let j = 0; j <= i; j++) {
      str += `${i + j + start}\t`;
    }
    str += "\n"
  }
  return str
}

console.log(numberCascade(7, 1));
console.log(numberCascade(7, 5));
