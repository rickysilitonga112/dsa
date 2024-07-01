function isSubsequence(str1, str2) {
  if (str1 === str2) {
    return true;
  }
  var checkingIndex = 0;
  var firstIndex = 0;
  var secondIndex = 1;

  while (secondIndex < str2.length) {
    if (str1[checkingIndex] == str2[firstIndex]) {
      checkingIndex++;
      firstIndex++;
    } else if (str1[checkingIndex] == str2[secondIndex]) {
      checkingIndex++;
      firstIndex++;
      secondIndex = firstIndex;
    } else {
      secondIndex++;
    }
  }
  if (checkingIndex == str1.length) {
    return true;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)

/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/
