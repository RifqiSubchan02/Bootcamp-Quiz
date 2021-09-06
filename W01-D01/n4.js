function getSalesTax(price, tax) {
  if (isNaN(price) && isNaN(tax)) return "Price dan Pajak harus dalam angka";
  if (isNaN(price)) return "Price harus dalam angka";
  if (isNaN(tax)) return "Tax harus dalam angka";

  return `Total Sales : Rp.${price} \nPajak : ${tax} \nTotal Harga+Pajak : ${price + (price * tax / 100)}`
}

console.log(getSalesTax("a", 1));
console.log(getSalesTax(500, "pajak"));
console.log(getSalesTax("harga", "pajak"));
console.log(getSalesTax(4500, 5));
