func math(a: Int, b: Int,_ action: (Int, Int) -> Int) -> Int {
  return operation(a, b);  // Use return statement and parentheses
}

print(math(a: 5, b: 6) { a, b in
  a+b
})  // Pass reference to function
