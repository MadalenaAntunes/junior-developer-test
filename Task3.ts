function calculateTotalPrice(price: number, taxRate: number) {
  return price * (1 + taxRate);
}

console.log(calculateTotalPrice(100, 0.2)); // Expected: 120
console.log(calculateTotalPrice(100, 0.5)); // Expected: 150
console.log(calculateTotalPrice(100, 0.8)); // Expected: 180
