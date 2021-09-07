function howManyKabisat(from, to) {
  let countYear = to - from;
  let countKabisat = 0;
  let word = "";
  for (let i = 0; i <= countYear; i++) {
    if ((from % 4 === 0 || from % 400 === 0) && from / 100 != 0) {
      word += from + " ";
      countKabisat++;
    }
    from++;
  }
  return `${countKabisat} tahun kabisat : ${word}`;
}

console.log(howManyKabisat(1997, 2021));