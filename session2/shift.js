function movingShift(s, shift) {
  let encoded = "";

  // Encode each character with increasing shift
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const currentShift = shift + i;

    if (/[a-z]/.test(char)) {
      // Lowercase letters
      const code = char.charCodeAt(0) - 97; // a=0, z=25
      const shifted = (code + currentShift) % 26;
      encoded += String.fromCharCode(shifted + 97);
    } else if (/[A-Z]/.test(char)) {
      // Uppercase letters
      const code = char.charCodeAt(0) - 65; // A=0, Z=25
      const shifted = (code + currentShift) % 26;
      encoded += String.fromCharCode(shifted + 65);
    } else {
      // Non-alphabetic characters stay the same
      encoded += char;
    }
  }

  // Split into 5 parts
  const length = encoded.length;
  const partSize = Math.ceil(length / 5);
  const parts = [];

  for (let i = 0; i < 5; i++) {
    const start = i * partSize;
    const end = start + partSize;
    parts.push(encoded.slice(start, end));
  }

  return parts;
}

function demovingShift(arr, shift) {
  const encoded = arr.join("");
  let decoded = "";

  for (let i = 0; i < encoded.length; i++) {
    const char = encoded[i];
    const currentShift = shift + i;

    if (/[a-z]/.test(char)) {
      // Lowercase letters
      let code = char.charCodeAt(0) - 97 - currentShift;
      while (code < 0) code += 26; // Handle wrap-around
      decoded += String.fromCharCode((code % 26) + 97);
    } else if (/[A-Z]/.test(char)) {
      // Uppercase letters
      let code = char.charCodeAt(0) - 65 - currentShift;
      while (code < 0) code += 26; // Handle wrap-around
      decoded += String.fromCharCode((code % 26) + 65);
    } else {
      // Non-alphabetic characters stay the same
      decoded += char;
    }
  }

  return decoded;
}
console.log(movingShift("hello hi how are you", 1));
console.log(demovingShift(["igop", "t oq", " rzi", " ogu", " qho"], 1));
