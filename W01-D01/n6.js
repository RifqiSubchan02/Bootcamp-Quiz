let d = 0;
function getCoordinate(x1, y1, x2, y2) {
  if (isNaN(x1) || isNaN(x2) || isNaN(y1) || isNaN(y2)) return "input koordinat harus dalam angka";
  return d = Math.sqrt(((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2)));
}

console.log(getCoordinate(3, 4, -4, -5));
console.log(getCoordinate("1", "2", "-1", "-2"));
console.log(getCoordinate("x", "2", "-y", "-2"));
console.log(getCoordinate(3.2, 4.5, -4.4, -5));