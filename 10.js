// ## Section E: Advanced Challenges

// ### Question 10: Social Media Analytics

// ```jsx

const posts = [
  {
    id: 1,
    author: "user1",
    content: "Hello world! javascript",
    likes: 15,
    tags: ["greeting", "first"],
  },
  {
    id: 2,
    author: "user2",
    content: "JavaScript is awesome",
    likes: 32,
    tags: ["programming", "js"],
  },
  {
    id: 3,
    author: "user1",
    content: "Learning arrays",
    likes: 18,
    tags: ["programming", "learning"],
  },
  {
    id: 4,
    author: "user3",
    content: "Good morning!",
    likes: 8,
    tags: ["greeting"],
  },
];

// ```

// a) Find the most popular post (highest likes)

const populerPost = posts.reduce((a, c) => {
  return a.likes > c.likes ? a : c;
});
console.log(populerPost);

// b) Get all unique tags used across all posts

const uniquePostsTags = [...new Set(posts.flatMap((post) => post.tags))];
console.log(uniquePostsTags);

// c) Calculate average likes per author

// ------------logic1-----------

// const authorStats = {};
// posts.forEach((post) => {
//   if (!authorStats[post.author]) {
//     authorStats[post.author] = { totalLikes: 0, count: 0 };
//   }
//   authorStats[post.author].totalLikes += post.likes;
//   authorStats[post.author].count += 1;
// });
// const avglikesPerAuthor = {};
// for (let author in authorStats) {
//   avglikesPerAuthor[author] =
//     authorStats[author].totalLikes / authorStats[author].count;
// }
// console.log(avglikesPerAuthor);

// ----------second attept with diffrent logic------------//
const averageLikesAccordingToAuthors = posts.reduce((a, c) => {
  if (!a[c.author]) {
    a[c.author] = 0;
  }
  a[c.author] += c.likes;

  return a;
}, {});
console.log(averageLikesAccordingToAuthors);
let totalLikes = 0;
for (let key in averageLikesAccordingToAuthors) {
  totalLikes += averageLikesAccordingToAuthors[key];
}
console.log(totalLikes);
const averageLikesPerAuthorIs = +(
  totalLikes / Object.keys(averageLikesAccordingToAuthors).length
).toFixed(2);
console.log(averageLikesPerAuthorIs);

// d) Find posts containing the word "JavaScript" or "programming" in content or tags

// const jsOrProg = posts.filter(
//   (post) =>
//     post.content.toLocaleLowerCase().includes("javascript") ||
//     post.content.toLocaleLowerCase().includes("programming") ||
//     post.tags.includes("programming") ||
//     post.tags.includes("Javascript")
// );
// console.log(jsOrProg);

const wordsContaining = [];
posts.forEach((post) => {
  const content = post.content.toLowerCase();
  const tags = post.tags.map((tag) => tag.toLowerCase());
  if (
    content.includes("javascript") ||
    content.includes("programming") ||
    tags.includes("programming") ||
    tags.includes("js")
  ) {
    wordsContaining.push(post);
  }
});
console.log(wordsContaining);

// e) Create a leaderboard of authors sorted by total likes

const totalLikesWithAuthors = posts.reduce((a, post) => {
  if (!a[post.author]) {
    a[post.author] = 0;
  }
  a[post.author] += post.likes;

  return a;
}, {});

console.log(totalLikesWithAuthors);

console.log();
const leaderBoard = Object.entries(totalLikesWithAuthors)
  .map(([author, likes]) => ({ author, likes }))
  .sort((a, b) => a - b);

console.log(leaderBoard);
