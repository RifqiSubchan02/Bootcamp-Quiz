const dates = [new Date(2021, 10, 20), new Date(2019, 3, 12), new Date(2020, 5, 23), new Date(2022, 3, 18)];

function matchingDate(arrays, searchYear) {
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i].getFullYear() === searchYear) {
      return `${arrays[i]}`
    }

  }
  return `Tidak ada list tanggal pada tahun ${searchYear}`;
}

console.log(matchingDate(dates, 2020));