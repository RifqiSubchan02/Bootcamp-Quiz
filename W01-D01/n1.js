const phi = 3.14159;
let width = 0;
function getAreaCircle(r) {
  if (isNaN(r)) return "Inputan harus dalam angka";
  if (r < 0) return `Radius ${r} <= 0, try higher`;
  return width = phi * (r * r);
}

console.log(getAreaCircle(-1));
console.log(getAreaCircle('a'));
console.log(getAreaCircle(5));