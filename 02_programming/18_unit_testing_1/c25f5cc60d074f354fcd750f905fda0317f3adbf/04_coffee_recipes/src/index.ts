type CoffeeRecipe = {
  name: string;
  ingredients: string[];
};

const coffeeRecipes: CoffeeRecipe[] = [
  {
    name: "espresso",
    ingredients: ["espresso"],
  },
  {
    name: "macchiato",
    ingredients: ["espresso", "milk foam"],
  },
  {
    name: "latte",
    ingredients: ["espresso", "milk foam", "steamed milk"],
  },
  {
    name: "cappuccino",
    ingredients: ["espresso", "milk foam", "steamed milk", "chocolate"],
  },
  {
    name: "americano",
    ingredients: ["espresso", "water"],
  },
];




export function giveRecipe(element: string): string {
  for (let i = 0; i < coffeeRecipes.length; i++){
    if (element === coffeeRecipes[i].name){
      return `${coffeeRecipes[i].name} ingredients:\n- ${coffeeRecipes[i].ingredients.join(",\n- ")}`
    }
  }
  return `Sorry, ${element} does not exist on our list.`
  }
