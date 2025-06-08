// ### Question 9: Nested Array Operations

// ```jsx
const orders = [
  {
    id: 1,
    customer: "John",
    items: [
      { product: "Laptop", price: 1000, quantity: 1 },
      { product: "Mouse", price: 25, quantity: 5 },
    ],
  },
  {
    id: 2,
    customer: "Jane",
    items: [
      { product: "Phone", price: 800, quantity: 1 },
      { product: "Case", price: 20, quantity: 1 },
    ],
  },
];

// ```

// a) Calculate the total value for each order
const totalOfProducts = orders.map((order) => {
  const total = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return { orderId: order.id, totalPrice: total, customer: order.customer };
});

console.log(totalOfProducts);

// b) Find all unique products across all orders

const uniqueItems = [
  ...new Set(
    orders.flatMap((order) => {
      return order.items.flatMap((item) => item.product);
    })
  ),
];
console.log(uniqueItems);
// c) Get the customer who spent the most money

// const mostSpent = totalOfProducts.reduce((acu, cur) => {
//   return acu.totalPrice > cur.totalPrice ? acu : cur;
// }, totalOfProducts[0]);
// console.log(mostSpent.customer);

let maxSpent = 0;
let maxSpentCustomer = "";
orders.forEach((order) => {
  const total = order.items.reduce(
    (sum, cur) => sum + cur.price * cur.quantity,
    0
  );
  if (total > maxSpent) {
    maxSpent = total;
    maxSpentCustomer = order.customer;
  }
});

console.log(maxSpent);
console.log(maxSpentCustomer);
// d) Create a flat array of all items from all orders

const flatArray = orders.flatMap((order) => {
  return order.items.map((item) => item);
});
console.log(flatArray);

// const flatArray = [...new Set(orders.flatMap((order) => order.items))];

// console.log(flatArray);

// e) Count the total quantity of all items sold

// const countOfQuantity = flatArray.reduce((sum, cur) => {
//   return sum + cur.quantity;
// }, 0);
// console.log(countOfQuantity);

let items;
items = {};

orders.forEach((order) => {
  items[order.id] = order.items.reduce((a, c) => a + c.quantity, 0);
});

let totalQuantity = 0;
for (let key in items) {
  totalQuantity += items[key];
}
console.log(items);
console.log(totalQuantity);

const allQuantity = flatArray.reduce((acu, item) => acu + item.quantity, 0);
console.log(allQuantity);
