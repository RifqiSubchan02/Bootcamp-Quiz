let payment = 0;
function getSalesDiscount(price, tax, discount) {
  if (isNaN(price) && isNaN(tax) && isNaN(discount)) return "Price, Tax & Discount harus dalam angka";
  if (isNaN(price)) return "Price harus dalam angka";
  if (isNaN(tax)) return "Tax harus dalam angka";
  if (isNaN(discount)) return "Discount harus dalam angka";
  return `/** \n\tTotal Sales\t: Rp.${price} \n\tDiscount (${discount})\t: Rp.${price * discount / 100} \n\tPriceAfterDiscount\t: Rp.${price - (price * discount / 100)} \n\tPajak(${tax})\t: Rp.${(price - (price * discount / 100)) * tax / 100} \n\t---------------------------------------------- \n\tTotalPayment\t: Rp${(price - (price * discount / 100)) + (price - (price * discount / 100)) * tax / 100} \n*/`
}

console.log(getSalesDiscount("a", 1, 5));
console.log(getSalesDiscount(500, "Pajak", 5));
console.log(getSalesDiscount("Harga", "Pajak", "Discount"));
console.log(getSalesDiscount(4500, 10, 5));