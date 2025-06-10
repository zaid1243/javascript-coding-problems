function uniCode(a) {
  const arr = [];
  a = typeof a === "string" ? a.split("") : a;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i + 1]) {
      continue;
    } else {
      arr.push(a[i]);
    }
  }
  return arr;
}
console.log(uniCode("AABBCCDD"));
