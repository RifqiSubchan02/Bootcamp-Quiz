// CARA KANG DIAN

import Product from "./Product.js";

const prod1 = new Product(1, "Samsung A1", "HP", 1500000, 2);
//prod1.jmlBeli = 4;
//prod1.price =1000;
//prod1.setPrice(1000);
prod1.setPriceJmlBeli(200, 20);

const prod2 = new Product(2, "Dell Ultrabook", "COMPUTER", 7850000, 2);
const prod3 = new Product(3, "Mesin cuci lg", "ELECTRONIC", 3500000, 1);
const prod4 = new Product(4, "iphone", "HP", 6000000, 2);
const prod5 = new Product(5, "Asus Laptop", "COMPUTER", 6500000, 4);

//declare listcart
let listCart = [];

function addToCart(product) {
  listCart = [...listCart, product];
  return listCart;
}

addToCart(prod1);
addToCart(prod2);
addToCart(prod3);
addToCart(prod4);
addToCart(prod5);

// display all product
function findAllProduct(array = []) {
  return array;
}
console.log(findAllProduct(listCart));

//anonymous function
(hello) => {
  console.log(hello)
}

//filter product by category dengan parameter hardcode;
//const listCategory = listCart.filter((el)=> el.category === "HP");
function listProductByCategory(category) {
  return listCart.filter((el) => el.category === category);
}
// isi listCategory dengan function parameter
const listCategory = listProductByCategory("COMPUTER");
console.log(listCategory);

// display total tagihan subTotal
const totalTagihan = listCart.reduce((sum, val) => sum + val.subTotal, 0);
console.log(`Total Tagihan = ${totalTagihan}`);

(sum, val) => {

}
//display total tagihan subtotal dengan discount
const subTotalDiscount = listCart.reduce((sum, val) => {
  if (val.jmlBeli > 1) {
    return sum + (val.subTotal - (val.subTotal * 10 / 100));
  } else {
    return sum + val.subTotal;
  }
}, 0)
console.log(`Total tagihan + discount =${subTotalDiscount}`);

// reduce (param1,param2), param1 =anonymouse function, param2 = initial value

//display total tagihan subtotal dengan discount with ternary operation
/* const subTotalDiscount2 = listCart.reduce((sum, val) => 
    (val.jmlBeli > 1) ? sum + (val.subTotal - (val.subTotal * 10 / 100)) 
    : (sum + val.subTotal > 1000000 ? sum + val.subTotal - 50000 : sum+val.subTotal) ,0); */

const subTotalDiscount2 = listCart.reduce((sum, val) =>
  (val.jmlBeli > 1) ? sum + (val.subTotal - (val.subTotal * 10 / 100)) : sum + val.subTotal, 0);
console.log(`Total tagihan + discount2 =${subTotalDiscount2}`);


// insert product to array listCart  
/* listCart = [...listCart,prod1];
listCart = [...listCart,prod2];
listCart = [...listCart,prod3];
listCart = [...listCart,prod4];
listCart = [...listCart,prod5]; */

console.log(prod1.toString());

console.log();


// ------------------------------------------------------------


// CARA RIFQI

// const Product = require("./Product.js");
// let listProducts = [];

// // Add Product
// function addProduct(product) {
//   const { prodId, prodName, category, price } = product;
//   return listProducts.push(new Product(prodId, prodName, category, price));
// }

// addProduct({ prodId: 1, prodName: "Samsung A1", category: "HP", price: 2500000 });
// addProduct({ prodId: 2, prodName: "Dell Ultrabook", category: "COMPUTER", price: 7850000 });
// addProduct({ prodId: 3, prodName: "Mesin Cuci LG", category: "ELECTRONIC", price: 3500000 });
// addProduct({ prodId: 4, prodName: "Iphone 12", category: "HP", price: 6000000 });
// addProduct({ prodId: 5, prodName: "Asus Laptop", category: "COMPUTER", price: 6500000 });
// console.log(listProducts);

// // Show All Products
// function showAllProducts(listProducts) {
//   let str = "All Products \n";
//   listProducts.forEach(element => {
//     const { prodId, prodName, category, price } = element;
//     str += prodId + "," + prodName + "," + category + "," + price + "\n";
//   });
//   return str;
// }

// console.log(showAllProducts(listProducts));

// // Find Product By Category
// function findProductByCategory(listProducts, category) {
//   return listProducts.filter(element => element.category === category);
// }

// console.log(findProductByCategory(listProducts, "HP"));

// // Display total harga product 

// // console.log(new Product().addProduct({ prodId: 1, prodName: "Samsung A1", category: "HP", price: 2500000 }));