const meals = [
  { description: 'Breakfast', calories: 460 },
  { description: 'Snack', calories: 220 },
];

const meal1 = meals[2];
console.log(meal1);

//Grades

const grade1 = 50 + Math.random() * 50.0;
const grade2 = 50 + Math.random() * 50.0;
const grade3 = 50 + Math.random() * 50.0;

console.log(grade1, letterGrade(grade1));
console.log(grade2, letterGrade(grade2));
console.log(grade3, letterGrade(grade3));
function letterGrade(grade) {
  if (grade >= 90) {
    return 'A';
  } else if (grade >= 80) {
    return 'B';
  } else if (grade >= 70) {
    return 'C';
  } else if (grade >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}
