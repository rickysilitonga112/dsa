function merge(firstNum, secNum) {
  let results = [];
  let left = 0;
  let right = 0;

  while (left < firstNum.length && right < secNum.length) {
    if (firstNum[left] < secNum[right]) {
      results.push(firstNum[left]);
      left++;
    } else {
      results.push(secNum[right]);
      right++;
    }
  }

  while (left < firstNum.length) {
    results.push(firstNum[left]);
    left++;
  }

  while (right < secNum.length) {
    results.push(secNum[right]);
    right++;
  }

  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([5, 2, 9, 6]));
