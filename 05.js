// ## Section C: Reduction and Aggregation

// ### Question 5: Shopping Cart Calculations

// ```jsx
const cartItems = [
  { name: "T-shirt", price: 25, quantity: 5 },
  { name: "Jeans", price: 60, quantity: 1 },
  { name: "Sneakers", price: 80, quantity: 1 },
  { name: "Hat", price: 15, quantity: 3 },
];

// ```

// a) Calculate the total cost of all items

const totalCostOfAllItems = cartItems.reduce((acu, cur) => {
  return acu + cur.price;
}, 0);
console.log(totalCostOfAllItems);

// b) Find the most expensive single item

const mostExpensiveItem = cartItems.reduce((acu, cur) => {
  return acu.price > cur.price ? acu : cur;
});
// c) Count the total number of items in the cart

const totalNumberOfItems = cartItems.reduce((acu, cur) => {
  return acu + cur.quantity;
}, 0);
console.log(totalNumberOfItems);

// d) Create a summary object with totalItems, totalCost, and averageItemPrice

const summaryOfItems = cartItems.reduce(
  (acu, cur) => {
    acu.totalPrice += cur.price * cur.quantity;
    acu.totalItems += cur.quantity;
    acu.averageItemPrice = acu.totalPrice / acu.totalItems;
    return acu;
  },
  { totalPrice: 0, totalItems: 0, averageItemPrice: 0 }
);

// console.log(summaryObj);
console.log(summaryOfItems);
// e) Find the item with the highest total value (price × quantity)

const itemWithHighestTotalValue = cartItems.reduce((acu, cur) => {
  return acu.price * acu.quantity > cur.price * cur.quantity ? acu : cur;
});
console.log(itemWithHighestTotalValue);
