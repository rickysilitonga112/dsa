function sameFrequency(num1, num2) {
  let num1Str = num1.toString();
  let num2Str = num2.toString();

  if (num1Str.length != num2Str.length) {
    return false;
  }

  var charCount = {};
  for (let i = 0; i < num1Str.length; i++) {
    let number = num1Str[i];
    charCount[number] ? (charCount[number] += 1) : (charCount[number] = 1);
  }

  // check is num1 character match with character 2
  console.log(num1Str);
  console.log(num2Str);
  for (let i = 0; i < num2Str.length; i++) {
    let letter = num2Str[i];
    console.log("Letter: " + letter + " - Value:" + charCount[letter]);
    // console.log(charCount[letter]);
    if (charCount[letter] == null || charCount[letter] == 0) {
      return false;
    }
    charCount[letter] -= 1;
  }
  return true;
}

console.log(sameFrequency(22, 222));

/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/
