// ### Question 8: Data Cleanup and Validation

// ```jsx
const rawData = [
  "  Alice Johnson  ",
  "bob@email.com",
  "",
  "Charlie Brown",
  null,
  "diana.smith@test.co",
  "   ",
  "Eve Wilson",
  undefined,
  "frank.miller@domain.org",
  "Grace Lee",
];

// ```

// a) Remove all empty, null, or undefined values

const withoutNulls = rawData.filter(
  (data) => typeof data === "string" && data.trim() !== ""
);

console.log(withoutNulls);

// b) Trim whitespace from all remaining strings

const withoutSpaces = withoutNulls.map((data) => data.trim());
console.log(withoutSpaces);
// c) Separate email addresses from regular names
const emails = withoutSpaces.filter((data) => data.includes("@"));
console.log(emails);
// d) Sort names alphabetically (excluding emails)
const names = withoutSpaces.filter(
  (data) => !data.includes("@") || !data.includes(".")
);
// console.log(names);
names.sort();
console.log(names);
// e) Validate that all emails contain '@' and '.'

const validEmails = emails.filter(
  (data) => data.includes("@") && data.includes(".")
);

console.log(validEmails);
