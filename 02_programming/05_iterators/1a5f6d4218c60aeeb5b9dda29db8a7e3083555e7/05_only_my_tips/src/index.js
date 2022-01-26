const todaysInvoices = [
  { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
  { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
  { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
];

function onlyMyTips(invoices) {
  const MyTips = [];
  invoices.forEach((element) => {
    if (element.waiter === "Yourself") {
      MyTips.push(element.tip);
    }
  });
  console.log(MyTips);
  return MyTips;
}

onlyMyTips(todaysInvoices);


// Do not remove the following line, it is for tests
module.exports = onlyMyTips;
