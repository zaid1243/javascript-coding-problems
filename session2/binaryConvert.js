function countBits(n) {
  return n
    .toString(2) // Convert to binary string
    .split("") // Split into characters
    .filter((bit) => bit === "1").length; // Keep only '1's // Count them
}

let number = 10;
console.log(number.toString(2));
console.log(number.toString(3));
console.log(number.toString(4));
console.log(number.toString(5));
console.log(number.toString(6));
console.log(number.toString(7));
