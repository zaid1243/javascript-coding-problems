function reverseAndCombineText(str) {
  let words = str.split(" ");

  while (words.length > 1) {
    // Step 1: Reverse each word
    words = words.map((word) => word.split("").reverse().join(""));

    // Step 2: Combine in pairs //fiwi hi
    const combined = [];
    for (let i = 0; i < words.length; i += 2) {
      //i=4
      if (i + 1 < words.length) {
        //iwif
        combined.push(words[i] + words[i + 1]); //fiwihi
      } else {
        combined.push(words[i]); // Last word remains alone //[iwif ,ih]
      }
    }
    words = combined; //fiwihi
  }

  return words[0]; // Final combined word
}

const outPut = reverseAndCombineText("win fin hin sin");
console.log(outPut);

// const outPut2 = reverseAndCombineText("zaid");
// console.log(outPut2);
