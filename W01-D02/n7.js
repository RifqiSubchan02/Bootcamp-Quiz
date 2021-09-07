let isUnique = true;
function isCharUnique(str) {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length && j != i; j++) {
      if (str[i] === str[j]) {
        isUnique = false
        return `false, karena ${str[i]} duplikat`
      }
    }
  }
  return `${isUnique}`;
}

console.log(isCharUnique('abcdefg'));
console.log(isCharUnique('abcdefga'));