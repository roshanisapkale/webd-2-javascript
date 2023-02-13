unit = 100;
discount= 10;
minimumCostForDiscount= 1000;
Quantity = parseInt(prompt("Enter quantity:"));
totalCost = unit * Quantity;
let finalCost = totalCost;

if (totalCost > minimumCostForDiscount) {
  finalCost = totalCost - (totalCost * discount/ 100);
}

console.log("Total cost: " + totalCost);
console.log("Final cost after discount: " + finalCost);