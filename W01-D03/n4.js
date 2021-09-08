const products = ["LG", "Asus 5432", "Mic For Youtuber", "Bluetooth Adapter", "Solo Leveling Webtoon", "Panasonic Air Conditioner", "Karaoke Bazooka", "PowerBank 24 Hours", "Backpack of Holding", "Game Box 5", "Universal Gadget", "Charger USB", "Squirming Tentacle", "Fishquarium", "Intel Processor 8 Core", "SpaceBarKeyboardOrganizer & USB Hub", "Pop USB", "Pet Rock Powerstation 5 Dual Heated", "Travel Mug", "Crosley Collegiate", "Portable USB", "Turntable Hoodie", "AK-47"];

// A
function filterProducts(arrays, prefix) {
  return arrays.filter(element => element.charAt(0) === prefix);
}

console.log(filterProducts(products, "A"));
console.log(filterProducts(products, "S"));

// B
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function printProducts() {
  let str = "";
  products.sort();
  for (let i = 0; i < alphabet.length; i++) {
    str += `===${alphabet[i]}===`;
    for (let j = 0; j < products.length; j++) {
      if (products[j].charAt(0) === alphabet[i]) str += `\n${products[j]}`;
    }
    str += "\n\n";
  }
  return str;
}

console.log(printProducts());