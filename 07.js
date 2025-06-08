// ### Question 7: Employee Performance Tracking

// ```jsx

const employees = [
  { name: "John", department: "IT", salary: 75000, projects: ["A", "B"] },
  { name: "Sarah", department: "Marketing", salary: 65000, projects: ["C"] },
  { name: "Mike", department: "IT", salary: 80000, projects: ["A", "D", "E"] },
  { name: "Lisa", department: "HR", salary: 60000, projects: ["B", "C"] },
  { name: "Tom", department: "Marketing", salary: 70000, projects: ["D"] },
];

// ```

// a) Group employees by department
// (return an object with department names as keys)

const departments = employees.reduce((acu, cur) => {
  if (!acu[cur.department]) {
    acu[cur.department] = [];
  }
  acu[cur.department].push(cur.name);
  return acu;
}, {});
console.log(departments);

// b) Find employees working on more than 2 projects

const workOn2Projects = employees
  .filter((emp) => emp.projects.length > 2)
  .map((emp) => emp.name);

console.log(workOn2Projects[0]);

const twoProjects = employees.find((emp) => {
  return emp.projects.length > 2;
});

// c) Calculate the average salary by department

const averageSalary = employees.reduce((acu, cur) => {
  if (!acu[cur.department]) {
    acu[cur.department] = { totalSalray: 0, count: 0 };
  }
  acu[cur.department].totalSalray += cur.salary;
  acu[cur.department].count += 1;

  return acu;
}, {});
console.log(averageSalary);

for (let key in averageSalary) {
  const { totalSalray, count } = averageSalary[key];
  averageSalary[key] = +(totalSalray / count).toFixed(2);
}
console.log(averageSalary);

// d) Get a list of all unique projects across all employees

const uniqueProjects = [...new Set(employees.flatMap((emp) => emp.projects))];
console.log(uniqueProjects);
// e) Find the highest-paid employee in each department

const highestPaid = employees.reduce((obj, cur) => {
  if (!obj[cur.department] || cur.salary > obj[cur.department].salary) {
    obj[cur.department] = cur;
  }

  return obj;
}, {});
