// Helper is used when we need to collect some value inside the recursive function
// if not use helper, the value inside the function will reset in every call

function findOddRecursion(arr) {
  var results = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 != 0) {
      results.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }
  helper(arr);

  return results;
}

console.log(findOddRecursion([1, 2, 3, 4, 5, 6, 7, 8]));
