let s = 0;
function calculateDistance(a, t) {
  if (isNaN(a) || isNaN(t)) return "Input must a number";
  if (a < 0 || t < 0) return "Acceleration or Time must be >= 0";
  s = 1 / 2 * a * (t * t);
  return `Jarak yang ditempuh adalah ${s} m/s`
}

console.log(calculateDistance("a", "t"));
console.log(calculateDistance(-1, 9));
console.log(calculateDistance(50, 60));