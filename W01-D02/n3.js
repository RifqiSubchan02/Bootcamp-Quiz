function payment(tglBayar, tglJatuhTempo, cicilan) {
  let date1 = tglBayar;
  let date2 = tglJatuhTempo;
  let denda = 0;
  let selisihDate = 0;
  const milliSecondPerDay = 1000 * 60 * 60 * 24;
  tglBayar = tglBayar.split("/");
  tglBayar = new Date(tglBayar[2], tglBayar[0] - 1, tglBayar[1]);
  tglJatuhTempo = tglJatuhTempo.split("/");
  tglJatuhTempo = new Date(tglJatuhTempo[2], tglJatuhTempo[0] - 1, tglJatuhTempo[1]);

  if (cicilan < 3500000) return "Angsuran anda kurang dari Rp.3.500.000,00. Silahkan isi angsuran sesuai ketentuan";
  if (tglBayar.getDate() < tglJatuhTempo.getDate() - 5) return `Tagihan bulan ${tglJatuhTempo.getMonth() + 1} belum tersedia`;
  if (tglBayar.getDate() > tglJatuhTempo.getDate()) {
    selisihDate = tglBayar - tglJatuhTempo;
    denda = (3500000 * (2 / 1000) * (selisihDate / milliSecondPerDay));
  }

  return `/** \n\t----------------------------------- \n\tTanggal Bayar : ${date1} \n\tJatuh Tempo : ${date2} \n\t----------------------------------- \n\tTagihan bulan ${tglJatuhTempo.getMonth() + 1},${tglJatuhTempo.getFullYear()} = Rp.${cicilan} \n\tDenda = Rp.${denda} (terlambat ${selisihDate / milliSecondPerDay} hari) \n\tTotal = Rp.${3500000 + denda} (lunas) \n\t----------------------------------- \n\tKwitansi ini sebagai alat bukti pembayaran \n*/`;
}

console.log(payment("09/30/2021", "09/27/2021", 50000));
console.log(payment("09/21/2021", "09/27/2021", 3500000));
console.log(payment("09/28/2021", "09/27/2021", 3500000));