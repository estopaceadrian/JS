const meal = {
  description: "Dinner",
};

console.log(meal);

const updatedMeal = {
  ...meal,
  Drinks: "Coke",
};

console.log(updatedMeal);

const latestMeal = {
  ...updatedMeal,
  Drinks: updatedMeal.Drinks + " and Pepsi",
};

console.log(latestMeal);

const { Drinks, ...noDrinks } = latestMeal;

console.log(noDrinks);
