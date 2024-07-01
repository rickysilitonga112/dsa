function stringMatchSearch(longStr, shortStr) {
  var match = 0;

  for (let i = 0; i < longStr.length; i++) {
    var isMatch = true;
    for (let j = 0; j < shortStr.length; j++) {
      if (longStr[i + j] !== shortStr[j]) {
        isMatch = false;
        break;
      }
    }
    if (isMatch === true) {
      match++;
    }
  }
  return match;
}

console.log(stringMatchSearch("wowomgzomg", "omg"));
