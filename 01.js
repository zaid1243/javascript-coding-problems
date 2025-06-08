// ## Section A: Transformation Methods

// ### Question 1: Student Grade Processing

// Given an array of student objects:

// ```jsx
const students = [
  { name: "Alice", grade: 85, subject: "Math" },
  { name: "Bob", grade: 92, subject: "Science" },
  { name: "Charlie", grade: 78, subject: "Math" },
  { name: "Diana", grade: 96, subject: "English" },
  { name: "Eve", grade: 88, subject: "Science" },
];

// ```

// a) Create a new array containing only the student names

const studentNames = students.map((name) => {
  return name.name;
});
console.log(studentNames);

// b) Create a new array with grade percentages converted to letter grades
// (A: 90+, B: 80-89, C: 70-79, D: 60-69, F: <60)

const studentsGrades = students.map((student) => {
  if (student.grade > 90) {
    return "A";
  } else if (student.grade > 79) {
    return "B";
  } else if (student.grade > 69) {
    return "C";
  } else if (student.grade > 59) {
    return "D";
  } else {
    return "Fail";
  }
});

// console.log(studentsGrades);

// c) Add a "status" property to each student object
// ("Excellent" for 90+, "Good" for 80-89, "Average" for 70-79, "Needs Improvement"
// for <70)

students.map((item) => {
  if (item.grade > 90) {
    item.status = "Excellent";
  } else if (item.grade > 80) {
    item.status = "Good";
  } else if (item.grade > 70) {
    item.status = "Average";
  } else {
    item.status = "Needs Imporvement";
  }
});

console.log(students);
