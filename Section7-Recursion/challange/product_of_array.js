// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[arr.length - 1] * productOfArray(arr.slice(0, -1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

console.log([1, 2, 3, 10].slice(0, -1));

// 1, 2, 3, 10
//       30
//   60
// 60
