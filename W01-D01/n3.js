let k = 0;
function fahrenheitToKelvin(f) {
  if (isNaN(f)) return "Fahreinheit must a number";
  return k = Math.round((f + 459.67) / 1.8);
}

console.log(fahrenheitToKelvin(45));
console.log(fahrenheitToKelvin("1"));
console.log(fahrenheitToKelvin("F"));