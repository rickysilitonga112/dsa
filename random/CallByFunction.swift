import Foundation

var a = 10
var b = 12


  print("A outside function before operation: \(a)")
  print("B outside function before operation: \(b)")

  swap(a: &a, b: &b)
  swap(a: a, b: b)
  
  print("A outside function after operation: \(a)")
  print("B outside function after operation: \(b)")

// swap function call by reference
func swap(a: inout Int, b: inout Int) {
  let temp = a
  a = b
  b = temp
  print("Call by reference...")
  print("A inside the function: \(a)")
  print("B inside the function: \(b)")
}

func swap (a: Int, b: Int) {
  var a = a
  var b = b

  let temp = a
  a = b
  b = temp

  print("Call by value...")
  print("A inside the function: \(a)")
  print("B inside the function: \(b)")
}