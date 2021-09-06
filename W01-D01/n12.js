function getDays(month, year) {
  if (isNaN(month) && isNaN(year)) return "Inputan bulan & tahun harus angka";
  if (isNaN(month)) return "Inputan bulan harus angka";
  if (isNaN(year)) return "Inputan tahun harus angka";
  return new Date(year, month, 0).getDate();
}

console.log(getDays("a", 2021));
console.log(getDays("2", "year"));
console.log(getDays("m", "year"));
console.log(getDays(2, 2000));
console.log(getDays(8, 2021));