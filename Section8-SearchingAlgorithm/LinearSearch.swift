// function to find a value inside the collection of array and return the index of the value
func linearSearch(arr: [String], valueToSearch: String) -> Int {
  for (index, item) in arr.enumerated() {
    if valueToSearch == arr[index] {
      return index
    } 
  } 
  return -1
}

let findIndex = linearSearch(arr: ["ricky", "bobby", "arya", "eko", "obet", "anto"], valueToSearch: "anto")
print("Find index ricky is: \(findIndex)")