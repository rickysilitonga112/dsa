// Problem solving - Multiple Pointers Pattern
function uniqueValueCounter(arr) {
  // if array only have 0 or 1 elements, thats the unique value
  if (arr.length < 2) {
    return arr.length;
  }

  var i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(uniqueValueCounter([1, 1, 1, 1, 1, 2]));
