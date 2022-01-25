// There should be no import in this file. Only exports!
export let coffeContainer= 0;
export function putLitersOfCoffee (coffeeQuantity){
  coffeContainer = coffeContainer + coffeeQuantity;
  return coffeContainer;
};

export function consumeLitersOfCoffee (coffeeQuantity){
  coffeContainer = coffeContainer - coffeeQuantity;
  return coffeContainer;
};
