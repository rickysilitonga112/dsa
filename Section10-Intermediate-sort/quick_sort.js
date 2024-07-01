function pivotHelper(arr, start = 0, end = arr.length) {
  let pivot = arr[start];
  let pivotIndex = start;

  for (let i = 1; i < end; i++) {
    if (pivot > arr[i]) {
      // if pivot is greater than the current element, increment the current pivotIndex
      pivotIndex++;

      // swap the current element with the element at pivotIndex
      // swap it, because we know that the array at pivot index is
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
    }
  }
  // swap the starting element with the pivotIndex
  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
  return pivotIndex;
}

function quickSort(arr, left=0, right = arr.length-1) {
  // base case
  if(left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
    // recursive

    // left
    quickSort(arr, left, pivotIndex-1)
    
    // right
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}