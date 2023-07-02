function max(numbers) {
// your code here, for-loop method preferred
    if (numbers.length === 0) {
      return undefined; // Return undefined if the array is empty
    }
  
    let maxValue = numbers[0]; // Assume the first element as the maximum value
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxValue) {
        maxValue = numbers[i]; // Update the maximum value if a larger element is found
      }
    }
  
    return maxValue;
  }
  
  function findPosition(numbers, target) {
// your code here, for-loop method preferred
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === target) {
        return i; // Return the position if the target number is found
      }
    }
  
    return -1; // Return -1 if the target number is not found
  }
  
  console.log(max([1, 2, 4, 5])); // Output: 5
  console.log(max([5, 2, 7, 1, 6])); // Output: 7
  console.log(findPosition([5, 2, 7, 1, 6], 5)); // Output: 0
  console.log(findPosition([5, 2, 7, 1, 6], 7)); // Output: 2
  console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // Output: 2 (the first position)
  console.log(findPosition([5, 2, 7, 1, 6], 8)); // Output: -1
  