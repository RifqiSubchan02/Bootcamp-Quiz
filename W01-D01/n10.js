let i = 0;
const currency = ["yen", "usd", "euro"];
const rate = [130.12, 14382.5, 16000];
function convertToRupiah(value, currencyType) {
  while (currency) {
    if (currencyType === currency[i]) {
      return `${value} ${currencyType} = Rp.${rate[i] * value}`;
    }
    i++;
  }
}

console.log(convertToRupiah(1000, "yen"));
console.log(convertToRupiah(100, "usd"));
console.log(convertToRupiah(100, "euro"));