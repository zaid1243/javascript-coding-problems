function sumOfDigits(a, b) {
  let arr = [];
  for (let i = 1; i <= b; i++) {
    const digits = i.toString().split("").map(Number);
    const num = digits.reduce((sum, digit, idx) => {
      return sum + Math.pow(digit, idx + 1);
    }, 0);
    // console.log(num);
    if (num === i) {
      arr.push(num);
    }
  }
  return arr;
}

const result = sumOfDigits(1, 100);
console.log(result);

// function sumDigPow(a, b) {
//   const result = [];

//   for (let i = a; i <= b; i++) {
//     const digits = i.toString().split("").map(Number);
//     const poweredSum = digits.reduce((sum, digit, index) => {
//       return sum + Math.pow(digit, index + 1);
//     }, 0);

//     if (poweredSum === i) {
//       result.push(i);
//     }
//   }

//   return result;
// }

// const res = sumDigPow(1, 100);
// console.log(res);
