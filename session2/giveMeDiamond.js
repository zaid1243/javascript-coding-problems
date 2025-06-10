// // Give me a Diamond
// 194737788% of 4,15811,499 of 38,028jayeshcp
// JavaScript
// Train AgainNext Kata
// Details
// Solutions
// Forks (15)
// Discourse (321)
// Collect|
// Description:
// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

// function diamond(n) {
//   if (n <= 0 || n % 2 === 0) return null;

//   let result = "";

//   for (let i = 1; i <= n; i += 2) {
//     const spaces = " ".repeat((n - i) / 2);
//     result += spaces + "*".repeat(i) + "\n";
//   }

//   for (let i = n - 2; i > 0; i -= 2) {
//     const spaces = " ".repeat((n - i) / 2);
//     result += spaces + "*".repeat(i) + "\n";
//   }

//   return result;
// }

let n = 5;
for (let i = 1; i <= n; i++) {
  const spaces = n - i;
  console.log(" ".repeat(spaces) + "* ".repeat(i));
}
for (let i = n - 1; i > 0; i--) {
  const spaces = n - i - 1;

  console.log(" ".repeat(spaces) + " *".repeat(i));
}
