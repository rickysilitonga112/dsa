function swap(arr, firstIndex, secondIndex) {
  [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
}

function bubbleSort(arr) {
  var iterationCounter = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        console.log("Swap: " + arr[j] + ", " + arr[j + 1]);
        swap(arr, j, j + 1);
      }
      iterationCounter++;
    }
  }
  console.log("Iteration counter: " + iterationCounter);
  return arr;
}

// optimized version with add a no swap variable, so if the array input is already sorted in prev iteration, next iteration will skip the swap
function bubbleSortOptimized(arr) {
  var iterationCounter = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    var no_swap = true;
    for (let j = 0; j < i; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        console.log("Swap: " + arr[j] + ", " + arr[j + 1]);
        swap(arr, j, j + 1);
        no_swap = false;
      }
      iterationCounter++;
    }
    if (no_swap) break;
  }
  console.log("Iteration counter: " + iterationCounter);
  return arr;
}

// bubbleSort([3, 7, 2, 1, 8, 6, 9]);
// console.log(bubbleSort([3, 7, 2, 1, 8, 6, 9]));
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6]));
// iteration counter: 21

console.log(bubbleSortOptimized([8, 1, 2, 3, 4, 5, 6]));
// iteration counter: 11
