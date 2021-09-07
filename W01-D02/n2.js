const price = 2500;

function tagihanKomik(startDate, endDate, items) {
  startDate = startDate.split("-");
  endDate = endDate.split("-");

  let validation1, validation2 = true;

  for (let i = 0; i < startDate.length; i++) {
    if (isNaN(startDate[i])) validation1 = false;
  }

  for (let i = 0; i < endDate.length; i++) {
    if (isNaN(endDate[i])) validation2 = false;
  }

  if (validation1 === false && validation2 === false) return `Tgl.Pinjam ${startDate} and Tgl.Kembali ${endDate} is not valid date format`;
  if (validation1 === false) return `Tgl.Pinjam ${startDate} is not valid date format`;
  if (validation2 === false) return `Tgl.Kembali ${endDate} is not valid date format`;

  const selisihDate = new Date(endDate[2], endDate[0] - 1, endDate[1]) - new Date(startDate[2], startDate[0] - 1, startDate[1]);
  const milliSecondPerDay = 1000 * 60 * 60 * 24;
  const countDay = selisihDate / milliSecondPerDay;
  const total = (2500 * items) * countDay;
  return `/** \nTotal Hari = ${countDay} \nTotal Komik = ${items} x Rp.${price} \n-------------------------------- \nTotal Tagihan = Rp.${total} \n*/`;
}

console.log(tagihanKomik("09-03-20xx", "09-06-2021", 4));
console.log(tagihanKomik("09-03-2021", "09-dd-2021", 4));
console.log(tagihanKomik("09-03-20xx", "09-dd-2021", 4));
console.log(tagihanKomik("09-03-2021", "09-06-2021", 4));