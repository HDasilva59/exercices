export const recipeMaker = {

  coffeeRecipes: [
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
    },],

    giveRecipe: function(element: string):string{
      for (let i = 0; i < recipeMaker.coffeeRecipes.length; i++){
        if (element === recipeMaker.coffeeRecipes[i].name){
          return `${recipeMaker.coffeeRecipes[i].name} ingredients:\n- ${recipeMaker.coffeeRecipes[i].ingredients.join(",\n- ")}`
        }
      }
      return `Sorry, ${element} does not exist on our list.`
    },
  }


