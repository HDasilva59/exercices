function greeter(people) {
  // Code the function here.
  let helloTo = 0;
  for (const coucou of people) {
    console.log(`Hello ${people[helloTo]}!`);
    helloTo++;
  }
}

// Do not remove the following lines, it is for tests
module.exports = greeter;

