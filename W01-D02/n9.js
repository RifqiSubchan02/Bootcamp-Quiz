function maxWordLength(str) {
  str = str.split(" ");
  let maxWord = "";
  for (let i = 0; i < str.length; i++) {
    if (maxWord.length < str[i].length) {
      maxWord = str[i];
    }
  }
  return maxWord;
}

console.log(maxWordLength("aku suka bootcamp sentul city"));