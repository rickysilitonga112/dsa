function areThereDuplicates(...values) {
  // convert the value to string
  let strValue = values.toString();

  // get first and last index
  let firstIndex = 0;
  let lastIndex = strValue.length - 1;

  var numOfIteration = 1;
  // compare the value
  while (firstIndex < lastIndex) {
    if (strValue[firstIndex] == strValue[lastIndex]) {
      return true;
    } else {
      numOfIteration % 2 == 0 ? lastIndex-- : firstIndex++;
    }
  }
  return false;
}

console.log(areThereDuplicates("a", "b", "c", "a")); // true
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true

/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
*/
