import { read } from "fs";
import { parse } from "path";
import readline from "readline";
import * as uuid from "uuid";
import moment from "moment";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Imports

const customersList = [];
//Create my empty customersList object

function chooseAnAction() {
  reader.question("Enter an action\n", (actionChoosen) => {
    loyaltyCardMenu(actionChoosen);
  });
}

//Action selector for the loyaltyCardMenu

function loyaltyCardGreeting() {
  console.log(
    "********************************************************\n1 - Add new customer\n2 - Access customer data\n3 - Quit",
  );
  loyaltyCardMenu();
}
//Greet the customer, display the choises and call the LoyaltyCardMenu function

function loyaltyCardMenu(actionChoosen) {
  if (actionChoosen === "1") {
    addNewCustomer();
  } else if (actionChoosen === "2") {
    customersSelector();
  } else if (actionChoosen === "3") {
    console.log("xoxo");
    reader.close();
  } else if (actionChoosen === undefined) {
    chooseAnAction();
  } else {
    console.log("Choose a valid action please");
    chooseAnAction();
  }
}
//Display the customer on the choosen menu

function addNewCustomer() {
  const personUuid = uuid.v4();
  reader.question("First Name:\n", (customerFirstName) => {
    reader.question("Last Name:\n", (customerLastName) => {
      reader.question("Email:\n", (customerEmail) => {
        reader.question("Birth Date:\n", (customerBirthDate) => {
          reader.question("City:\n", (customerCity) => {
            reader.question("Country:\n", (customerCountry) => {
              customersList.push({
                personUuid,
                firstName: customerFirstName,
                lastName: customerLastName,
                email: customerEmail,
                birthDate: customerBirthDate,
                city: customerCity,
                country: customerCountry,
                fullname: function () {
                  return `${this.firstName} ${this.lastName}`;
                },
                loyaltyPoints: 500,
                purchases: [],
              });
              loyaltyCardGreeting();
            });
          });
        });
      });
    });
  });
}
//Create a new customer identity and display it in the Customers list array

function displayPeople(element, compteur) {
  console.log(`${compteur + 1} - ${element.firstName} ${element.lastName}`);
  return;
}
//display the list of customers registered

function showAccount(customer) {
  console.log(`********************************************************
  ${customersList[customer - 1].firstName} ${customersList[customer - 1].lastName}'S INFORMATION
  ********************************************************
  Customer information:
  Name:             ${customersList[customer - 1].firstName} ${customersList[customer - 1].lastName}
  Email:            ${customersList[customer - 1].email}
  Address:
   - City:          ${customersList[customer - 1].city}
   - Country:       ${customersList[customer - 1].country}
  Total purchase:   1529\n
  Loyalty points:  ${customersList[customer - 1].loyaltyPoints}`);
  interactionsMenu(customer);
}

function addPurchase(customer) {
  reader.question("Purchase amount\n", (purchaseAmount) => {
    const todayDate = moment().format("L");
    customersList[customer - 1].purchases.push(`${todayDate} - ${purchaseAmount}€`);
    console.log("purchase sucessfully added");
    interactionsMenu(customer);
  });
}

function useLoyaltyPoints(customer){
  reader.question("How many LoyaltyPoints are we going to use?\n", (subLoyalty) => {
    if (subLoyalty > customersList[customer - 1].loyaltyPoints) {
      console.log(
        `You can't substract ${customersList[customer - 1].loyaltyPoints} to ${customersList[customer - 1].firstName} ${customersList[customer - 1].firstName} because he only have ${customersList[customer - 1].loyaltyPoints}`);
      interactionsMenu(customer);
    } else {
      customersList[customer - 1].loyaltyPoints = customersList[customer - 1].loyaltyPoints - subLoyalty;
      console.log(
        `${customersList[customer - 1].firstName} ${customersList[customer - 1].firstName} now have ${
          customersList[customer - 1].loyaltyPoints
        } LoyaltyPoints!`,
      );
      interactionsMenu(customer);
    }
  });
}

function showHistory(customer){
  customersList[customer - 1].purchases.forEach((element, index) => console.log(customersList[customer - 1].purchases[index]));
  interactionsMenu(customer);
}

function interactionsChoises(actionChoosen, selectedCustomer) {
  if (actionChoosen === "1") {
    showAccount(selectedCustomer);
  } else if (actionChoosen === "2") {
    addPurchase(selectedCustomer);
  } else if (actionChoosen === "3") {
    useLoyaltyPoints(selectedCustomer);
  } else if (actionChoosen === "4") {
    showHistory(selectedCustomer);
  } else if (actionChoosen === "5") {
    customersSelector();
  } else if (actionChoosen === "6") {
    loyaltyCardGreeting();
  } else if (actionChoosen === "7") {
    console.log("xoxo");
    reader.close();
  }
}
//send the customer in the wanted menu and log it
function interactionsMenu(selectedCustomer) {
  console.log(
    `********************************************************\n${customersList[selectedCustomer - 1].firstName} ${
      customersList[selectedCustomer - 1].lastName
    }\n********************************************************`,
  );
  console.log(
    "1 - Show account\n2 - Add purchase\n3 - Use loyalty points\n4 - Show purchase history\n5 - Choose another customer\n6 - Back to menu\n7 - Quit",
  );
  reader.question(
    `Choose an action for ${customersList[selectedCustomer - 1].firstName} ${
      customersList[selectedCustomer - 1].lastName
    }\n`,
    (actionChoosen) => {
      interactionsChoises(actionChoosen, selectedCustomer);
    },
  );
}
//display the differents possible interactions

function customersSelector() {
  console.log(
    "********************************************************\nCHOOSE A CUSTOMER\n********************************************************",
  );
  customersList.forEach((element, index) => displayPeople(element, index));
  reader.question("Choose a customer\n", (pickedCustomer) => {
    const parsedPickedCustomer = parseInt(pickedCustomer);
    console.log(typeof pickedCustomer);
    if (parsedPickedCustomer >= 1 && customersList.length >= parsedPickedCustomer) {
      interactionsMenu(parsedPickedCustomer);
    } else if (parsedPickedCustomer < 1 || customersList.length < parsedPickedCustomer) {
      customersSelector();
    }
  });
}
//select a Customer and send to the iteractions menu
console.log("Welcome");
loyaltyCardGreeting();
