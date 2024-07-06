/// Calculate how much digit in parameter number
/// ex input: 1534 -> output: 4

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num)) + 1);
}

/// Calculate maximum digit of number in numbers
/// ex input: [343, 5345, 234, 436, 3423, 234324] -> Output: 6
function mostDigits(nums) {
  let maxDigit = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigit = Math.max(maxDigit, digitCount(nums[i]));
  }
  return maxDigit;
}

/// Return the digit of number in place from behind
/// ex input: num: 123468, place: 2 -> Output: 4
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function radixSort(nums) {
  // 1. find the max digits in the arrays
  let maxDigit = mostDigits(nums);

  // 2. loop over from 0 to max digits
  for (let k = 0; k < maxDigit; k++) {
    // 3. Create buckets (10 buckets as representation of decimal value from 0 to 9) to store the value in every loop
    let digitBuckets = Array.from({ length: 10 }, () => []);

    // 4. Loop over the arrays
    for (let i = 0; i < nums.length; i++) {
      // 5. Find the digit at k in arrays i
      let digit = getDigit(nums[i], k);

      // 6. Push the arrays to the digit buckets based on the value of digits in k position
      digitBuckets[digit].push(nums[i]);
    }

    // 7. Update the nums arrays with current value of digit buckets
    nums = [].concat(...digitBuckets);
  }

  // 8. Return the the arrays
  return nums;
}

console.log(
  radixSort([34, 5234, 534, 234, 545, 623, 234234, 3454543, 234234, 1231, 2342])
);
