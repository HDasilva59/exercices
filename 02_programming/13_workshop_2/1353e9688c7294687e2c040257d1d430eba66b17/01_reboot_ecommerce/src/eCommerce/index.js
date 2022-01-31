import readline from "readline";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const shop = [
  { name: "beer", price: 4, quantity: 300 },
  { name: "chips", price: 2, quantity: 25 },
  { name: "cheese", price: 3, quantity: 50 },
  { name: "olives", price: 1, quantity: 200 },
  { name: "Bottle of water", price: 0.5, quantity: 1000 },
];

function initiateNewCustomer() {
  const customerCart = [];
  menu(customerCart);
}

function menu(customerCart) {
  console.log(
    "**************************************************\nMENU\n**************************************************\n1 - Buy a product\n2 - Show cart\n3 - Checkout\n4 - Quit\n",
  );
  console.log(customerCart);
  reader.question("Choose an action\n", (actionChoosen) => {
    menuChoise(actionChoosen, customerCart);
  });
}

function menuChoise(selectedMenu, customerCart) {
  if (selectedMenu === "1") {
    buyAProductMenu(customerCart);
  } else if (selectedMenu === "2") {
    showCart(customerCart);
  } else if (selectedMenu === "3") {
    checkout(customerCart);
  } else if (selectedMenu === "4") {
    console.log("Goodbye we hope to see you back soon!");
    reader.close();
  } else {
    menu();
  }
}

function buyAProductVerifications(product, quantity, customerCart) {
  if (shop[product - 1].quantity < quantity) {
    console.log(`Hey sorry we don't have enought ${shop[product - 1].name}`);
  } else if (shop[product - 1].quantity > quantity) {
    customerCart.push({
      name: shop[product - 1].name, quantity: quantity});
    menu(customerCart);
  }
}

function buyAProductMenu(customerCart) {
  console.log(
    "**************************************************\nSHOP\n**************************************************",
  );
  shop.forEach((element, index) => {
    console.log(`${index + 1} - ${element.name}: ${element.price}€ (quantity: ${element.quantity})`);
  });
  reader.question("Choose a product\n", (productChoosen) => {
    reader.question("Choose a quantity\n", (quantityChoosen) => {
      buyAProductVerifications(productChoosen, quantityChoosen, customerCart);
    });
  });
}

function showCart() {}

function checkout() {}

initiateNewCustomer();
menu();
