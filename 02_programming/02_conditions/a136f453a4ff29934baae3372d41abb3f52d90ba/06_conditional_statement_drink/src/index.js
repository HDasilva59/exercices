// > Frieda and Francis walk on the street. Frieda is 22 and Francis is 17.

// Create two objects, `frieda`, `francis` with the fields :
//   `age` (an integer) and `name`, (obviously a string)
const frieda = {
  age: 22,
  name: "Frieda",
};
const francis = {
  age: 17,
  name: "Francis",
};
let canFriedaDrinkAlcohol;
let canFrancisDrinkAlcohol;

if (francis.age <= 18) {
  canFrancisDrinkAlcohol = true;
} else {
  canFrancisDrinkAlcohol = false;
}

if (frieda.age <= 18) {
  canFriedaDrinkAlcohol = true;
}
else {
  canFriedaDrinkAlcohol = false;
}
// Create two variables `canFriedaDrinkAlcohol` and `canFrancisDrinkAlcohol` to answer,
// respectively, to the question "Can he / she drink alcohol?".
