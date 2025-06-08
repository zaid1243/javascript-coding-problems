// ## Section B: Filtering and Searching

// ### Question 3: User Management System

// ```jsx
const users = [
  { id: 1, username: "john_doe", age: 25, isActive: true, role: "user" },
  { id: 2, username: "jane_smith", age: 32, isActive: true, role: "admin" },
  { id: 3, username: "bob_wilson", age: 19, isActive: false, role: "user" },
  {
    id: 4,
    username: "alice_brown",
    age: 28,
    isActive: true,
    role: "moderator",
  },
  { id: 5, username: "charlie_davis", age: 35, isActive: false, role: "user" },
];

// ```

// a) Find all active users over 21 years old

const over21 = users.filter((user) => {
  return user.age > 21;
});
console.log(over21);

// b) Check if there are any inactive admin users

const inactiveAdminUsers = users.some((user) => {
  return !user.isActive;
  // return user.isActive === false;
});
console.log(inactiveAdminUsers);
// c) Find the first user with "moderator" role

const firstMorderator = users.find((user) => {
  return user.role === "moderator";
});
console.log(firstMorderator);

// d) Get all usernames of active users

const allActiveUsers = users.filter((user) => {
  return user.isActive;
});
console.log(allActiveUsers);

// e) Check if all users have usernames longer than 5 characters

const longerUserName = users.every((user) => {
  return user.username.length > 5;
});
console.log(longerUserName);
