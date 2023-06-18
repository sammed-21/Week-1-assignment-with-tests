/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  
  return [];
}

calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 231656076800000,
    price: 20,
    category: "Food  ",
    itemName: "burger",
  },
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "rice sambar",
    itemName: "sam",
  },
]);

module.exports = calculateTotalSpentByCategory;
