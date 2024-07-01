// Problem Solving Naive solution for sum_zero
function sumZeroNaiveSolution(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

// Problem solving - Multiple solution pattern for sum_zero
// Rules:
// 1. the arr is sorted ascending
function sumZeroMultiplePointers(arr) {
    var startIndex = 0;
    var endIndex = arr.length - 1;

    while (startIndex < endIndex) {
        let sum = arr[startIndex] + arr[endIndex];
        if (sum == 0) {
            return [arr[startIndex], arr[endIndex]];
        } else if (sum > 0) {
            endIndex--;
        } else {
            startIndex++;
        }
    }
}

console.log(sumZeroNaiveSolution([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log(sumZeroMultiplePointers([-4, -3, -2, -1, 0, 1, 2, 5]));
