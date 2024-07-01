// Multiple Pointer pattern
func pickingNumbers(a: [Int]) -> Int {
  var maximum = 0

for number in a {
  print(number)
  // Count occurrences of the current number and the previous number
  let currentCount = a.filter { $0 == number }.count
  let previousCount = a.filter { $0 == number - 1 }.count

  print("Current count: \(currentCount)")
  print("Previous count: \(previousCount)")

  // Combine counts for potential maximum
  let combinedCount = currentCount + previousCount
  
  maximum = max(maximum, combinedCount) // Update maximum
}

  return maximum
}

print(pickingNumbers(a: [4, 6, 5, 3, 3, 1]))