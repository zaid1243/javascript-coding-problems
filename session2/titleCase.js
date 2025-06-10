function titleCase(str, ignore) {
  if (!str) return "";

  const toIgnore = new Set((ignore || "").toLowerCase().split(" "));
  console.log(toIgnore);

  const finalString = str
    .toLowerCase()
    .split(" ")
    .map((item, index) => {
      if (index === 0 || !toIgnore.has(item)) {
        return item[0].toUpperCase() + item.slice(1);
      } else {
        return item;
      }
    })
    .join(" ");
  console.log(finalString);
}

console.log(titleCase("zaid HI the saamMiL", "hi saammil"));
