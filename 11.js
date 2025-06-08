// ### Question 11: Inventory Management

// ```jsx
const inventory = [
  {
    sku: "A001",
    name: "Widget A",
    stock: 40,
    reorderLevel: 50,
    category: "Tools",
  },
  {
    sku: "B002",
    name: "Widget B",
    stock: 25,
    reorderLevel: 30,
    category: "Parts",
  },
  {
    sku: "C003",
    name: "Widget C",
    stock: 75,
    reorderLevel: 40,
    category: "Tools",
  },
  {
    sku: "D004",
    name: "Widget D",
    stock: 10,
    reorderLevel: 20,
    category: "Parts",
  },
];

// ```

// a) Find items that need reordering (stock <= reorderLevel)

const reorderReq = inventory.filter((item) => {
  return item.stock < item.reorderLevel;
});
console.log(reorderReq);

// -------------------b) Calculate total stock value by category
// (assume price = stock * 10 for calculation)

const totalStockByCategory = inventory.reduce((a, c) => {
  const stock = c.stock * 10;
  a[c.category] = (a[c.category] || 0) + stock;
  return a;
}, {});

// console.log(categoryVise);
// ------------------- c) Find the item with the lowest stock
//    percentage relative to reorder level

const itemWithLowestStock = inventory.reduce((lowest, item) => {
  const percentage = (item.stock / item.reorderLevel) * 100;
  if (!lowest || percentage < lowest.percentage) {
    return { item, percentage };
  }
  return lowest;
}, null);
console.log(itemWithLowestStock);

//  -------------------d) Create a report showing category,
// total items, and items needing reorder

const summary = inventory.reduce((acu, cur) => {
  if (!acu[cur.category]) {
    acu[cur.category] = { totalItems: 0, itemsNeedingReOrder: 0 };
  }
  acu[cur.category].totalItems += 1;
  if (cur.stock <= cur.reorderLevel) {
    acu[cur.category].itemsNeedingReOrder += 1;
  }
  return acu;
}, {});
console.log(summary);

// e) Sort items by urgency (how far below reorder level they are)

const mostRequiredItems = [...inventory]
  .filter((item) => item.stock < item.reorderLevel)
  .sort((b, a) => b.stock - b.reorderLevel - (a.stock - a.reorderLevel));

console.log(mostRequiredItems);
