function getRandomPasswords(s) {
  if (s.toString().length < 6) return "Length must more than equal 6"
  if (isNaN(s)) return (Math.random() + 1).toString(36).substring(4);
  return "Value must be a character";
}

console.log(getRandomPasswords("123456"));
console.log(getRandomPasswords(3422));
console.log(getRandomPasswords("code"));
console.log(getRandomPasswords("codeid"));