function howMuchDidIMake(invoices) {
  let Money = 0;
  invoices.forEach((element) => {
    if (element.waiter === "Yourself") {
      Money = Money + element.tip;
    }
  });
  return Money;
}

const invoices = [
  { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
  { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
  { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
];

// Do not remove the following line, it is for tests
module.exports = howMuchDidIMake;
