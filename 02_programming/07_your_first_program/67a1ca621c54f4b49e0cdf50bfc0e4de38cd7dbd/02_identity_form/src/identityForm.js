let firstName;
let lastName;
let age;

const identityForm = (reader) => {
  reader.question ("What is your first name ?", (firstName) => {
    reader.question("What is your last name ?", (lastName) => {
      reader.question("What is your age ?", (age) => {
        console.log(`Your name is ${firstName} ${lastName} and you are ${age}.`);});
    });
  });
};
// Leave line below for tests to work
module.exports = identityForm;
