function max(numbers) {
// your code here, for-loop method preferred
    if (numbers.length === 0) {
      return undefined; 
    }
  
    let maxValue = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxValue) {
        maxValue = numbers[i]; 
      }
    }
  
    return maxValue;
  }
  
  function findPosition(numbers, target) {
// your code here, for-loop method preferred
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === target) {
        return i; 
      }
    }
  
    return -1; 
  }
  
  console.log(max([1, 2, 4, 5])); // Output: 5
  console.log(max([5, 2, 7, 1, 6])); // Output: 7
  console.log(findPosition([5, 2, 7, 1, 6], 5)); // Output: 0
  console.log(findPosition([5, 2, 7, 1, 6], 7)); // Output: 2
  console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // Output: 2 (the first position)
  console.log(findPosition([5, 2, 7, 1, 6], 8)); // Output: -1
  