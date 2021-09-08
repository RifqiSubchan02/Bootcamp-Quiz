let fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
let fruits2 = fruits;

// A
fruits.push("Anggur", "Banana", "Sirsak");
console.log(fruits);
// B
fruits.pop();
console.log(fruits);

// C
fruits.splice(2, 1);
console.log(fruits);

// D
fruits.splice(0, fruits.length, "Jeruk", "Mangga", "Banana");
console.log(fruits);

// E
fruits.splice(2, 1, "Rambutan", "Bengkuang", "Banana");
console.log(fruits);

// F
fruits.splice(4, 1, "Nangka");
console.log(fruits)

// G
let sayur = ["Kangkung", "Bayam", "Tomat", "Bawang"];
let vege = fruits2.concat(sayur);
console.log(vege);

// H
vege.reverse();
console.log(vege);

// I
vege.reverse();
function switchIndex(arrays, str1, str2) {
  str2 = str2.toLowerCase();
  str2 = str2.replace(str2.charAt(0), str2.charAt(0).toUpperCase());
  vege.fill(str1, vege.indexOf(str2), vege.indexOf(str2) + 1)
  return vege;
}
console.log(switchIndex(vege, "TOMAT", "JERUK"));