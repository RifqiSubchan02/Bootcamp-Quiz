import Product from "../W01-D04/Product.js";
const prod1 = new Product(1, "Samsung A1", "HP", 2500000, 3);
const prod2 = new Product(2, "Dell Ultrabook", "COMPUTER", 7850000, 2);
const prod3 = new Product(3, "Mesin Cuci LG", "ELECTRONIC", 3500000, 1);
const prod4 = new Product(4, "Iphone 12", "HP", 6000000, 2);
const prod5 = new Product(5, "Asus Laptop", "COMPUTER", 6500000, 4);

const listProducts = [prod1, prod2, prod3, prod4, prod5];
const payments = ['BCA', 'Shopee Pay', 'OVO'];

function addToCart(list) {
  return list.filter(product => product.price >= 3000000);
}

function createOrder() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const sequence = Math.ceil(Math.random() * 10)
  return `${year}/${month}/${date}#000${sequence}`;
}

async function displayTagihan(payment) {
  const cart = await addToCart(listProducts);
  const order = createOrder();
  let str = "/**\nRincian Produk \n";
  let totalPrice = 0;
  const shippingCost = 5000;
  cart.map(product => {
    str += `\n\t${product.prodName} \n\t${product.jmlBeli}x Rp.${product.price} \tRp.${product.subTotal}`;
    totalPrice += product.subTotal;
  })
  str += `\n------------------------------------ \n\tTotal Belanja \tRp.${totalPrice} \n\tOngkos Kirim \tRp.${shippingCost} \n\t---------------------------- \n\tSubtotal \tRp.${totalPrice + shippingCost} \n\tPayment with \t${payment} \n**/`;


  return str;
}

displayTagihan(payments[2])
  .then(resolve => {
    console.log(resolve)
  })
  .catch(reject => {
    console.log(reject)
  })