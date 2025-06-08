// ### Question 2: E-commerce Product Catalog

// Given this product array:

// ```jsx
const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
  { id: 2, name: "Book", price: 15, category: "Education", inStock: false },
  { id: 3, name: "Phone", price: 699, category: "Electronics", inStock: true },
  { id: 4, name: "Desk", price: 299, category: "Furniture", inStock: true },
];

// ```

// a) Create a new array with prices converted to include a 10% tax

const priceIncludeTax = products.map((product) => {
  return { ...product, price: product.price * 0.1 + product.price };
});
console.log(priceIncludeTax);

// b) Generate an array of product summaries in the
//    format: "Product: [name] - $[price] ([category])"

const productsSummary = products.map((product) => {
  return `Product: ${product.name} - $${product.price} (${product.category})`;
});
console.log(productsSummary);

// c) Create a new array where each product has a "discountPrice"
//    property (20% off original price)

const priceWithDiscount = products.map((product) => {
  return {
    ...product,
    dicountPrice: +(product.price - product.price * 0.2).toFixed(2),
  };
});

console.log(priceWithDiscount);
