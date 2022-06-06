const meal = {
  description: 'Breakfast',
  calories: 180,
  date: new Date(2020, 0, 1),
};

console.log(meal.date.toString());
console.log(meal.calories);

//EXERCISE >
// 1. create a meal object for a snack
// print both the snacks description
// and calories to the console

/*
   2. create a new constant named 
   updatedCalories, setting it to 150
   plus the calories used in the above
   meal object.
   Print the value of updatedCalories 
   to the console.
   
   Note: use the dot notation syntax as
   part of the expression
*/
const snack = {
  snack: 'chips',
  calories: 120,
};

const updatedCalories = {
  ...snack,
  calories: 150,
};

console.log(updatedCalories);
