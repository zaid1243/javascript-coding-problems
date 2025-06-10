function removeNb(n) {
  let sum = 0;
  let arr = [];
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      if (a * b == sum - (a + b)) {
        arr.push([a, b]);
      }
    }
  }
  return arr;
}
console.log(removeNb(26));
