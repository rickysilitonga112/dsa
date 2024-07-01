// Problem solving - valid anagram
function validAnagram(firstString, secondString) {
  if (firstString.length != secondString.length) {
    return false;
  }

  let characters = {};

  // mapping first string
  for (let i = 0; i < firstString.length; i++) {
    let letter = firstString[i];
    characters[letter] ? (characters[letter] += 1) : (characters[letter] = 1);
  }

  // lookup on second strings
  for (let i = 0; i < secondString.length; i++) {
    let letter = secondString[i];
    if (!characters[letter]) {
      return false;
    }
  }
  return true;
}

console.log("isValid: " + validAnagram("test", "eftt"));
