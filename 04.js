// ### Question 4: Sales Data Analysis

// ```jsx
const salesData = [
  { month: "Jan", sales: 15000, region: "North" },
  { month: "Feb", sales: 18000, region: "South" },
  { month: "Mar", sales: 22000, region: "North" },
  { month: "Apr", sales: 19000, region: "East" },
  { month: "May", sales: 25000, region: "West" },
  { month: "Jun", sales: 21000, region: "South" },
];

// ```

// a) Filter months where sales exceeded $20,000

const slaesExceeded = salesData.filter((sale) => {
  return sale.sales > 20000;
});
console.log(slaesExceeded);

// console.log(salesExeeded);
// b) Find the first month where sales were below $20,000

const firLowSalesMonth = salesData.find((sale) => {
  return sale.sales < 20000;
});

// console.log(firstMonthBelow);
console.log(firLowSalesMonth);

// c) Check if any region had sales above $24,000

const regionAbove24000 = salesData.some((sale) => {
  return sale.sales > 24000;
});
console.log(regionAbove24000);

// console.log(isRegionAbove);
// d) Verify if all months had sales above $10,000

const isAllMonthsSaleMoreThan10000 = salesData.every((sale) => {
  return sale.sales > 10000;
});
console.log(isAllMonthsSaleMoreThan10000);
