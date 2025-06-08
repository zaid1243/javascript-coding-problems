// ### Question 12: Time Series Data

// ```jsx
const temperatures = [
  { date: "2024-01-01", temp: 22 },
  { date: "2024-01-02", temp: 25 },
  { date: "2024-01-03", temp: 19 },
  { date: "2024-01-04", temp: 28 },
  { date: "2024-01-05", temp: 24 },
  { date: "2024-01-06", temp: 21 },
  { date: "2024-01-07", temp: 26 },
];
// ```

// a) Find the hottest and coldest days

let hottest = temperatures[0];
let coldest = temperatures[0];
for (let day of temperatures) {
  if (day.temp < coldest) {
    coldest = day;
  }
  if (day.temp > hottest) {
    hottest = day;
  }
}
console.log(coldest);
console.log(hottest);

// b) Calculate the average temperature for the week

let count = 0;
const averageTemp =
  temperatures
    .map((day) => {
      return day.temp;
    })
    .reduce((acu, cur) => {
      count++;
      return acu + cur;
    }, 0) / count.toFixed(2);
console.log(averageTemp);

// c) Find days where temperature increased from the previous day

let increasedTemp = [];
for (let i = 1; i < temperatures.length; i++) {
  if (temperatures[i - 1].temp < temperatures[i].temp) {
    increasedTemp.push(temperatures[i]);
  }
}
console.log(increasedTemp);

// d) Identify temperature anomalies
// (more than 5 degrees different from average)

// // e) Create a summary with
// //  min, max, average, and total days recorded

const summary = {
  min: coldest.temp,
  minDate: coldest.date,
  max: hottest.temp,
  maxDate: hottest.date,
  average: +averageTemp.toFixed(2),
  days: temperatures.length,
};
