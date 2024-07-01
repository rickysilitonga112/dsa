function averagePair(arr, target) {
  var firstIndex = 0;
  var lastIndex = arr.length - 1;

  // get the first index, and last index array value
  // add the value and divide by 2
  // if equal to target return true
  // else if less than target
  while (firstIndex < lastIndex) {
    let sum = arr[firstIndex] + arr[lastIndex];
    if (sum / 2 == target) {
      return true;
    } else if (sum / 2 > target) {
      lastIndex--;
    } else {
      firstIndex++;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

/*
Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/
