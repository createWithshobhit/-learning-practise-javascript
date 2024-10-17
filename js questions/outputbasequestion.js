// function filterEvenNumbers(arr) {
//     // Filter out even numbers using the filter() method
//    const evnNum = arr.filter(num => num % 2 === 0);
//    return evnNum;
// }

// // Example usage
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
// console.log(filterEvenNumbers([1.5, 2.2, 3.5, 4.6, 5.5, 6.8])); // Output: [2.5, 4.5, 6.5]
// console.log(filterEvenNumbers([1.6, 2.5, 3.2, 4.5, 5.0, 6.5, 7.6])); // Output: [2.5, 4.5, 6.5, 7.5]
// function filterEvenNumbers(arr) {
//     // Filter out even numbers using the filter() method based on rounded values
//     const evnNum = arr.filter(num => Math.floor(num) % 2 === 0);
//     return evnNum;
// }

// // Example usage
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
// console.log(filterEvenNumbers([1.5, 2.2, 3.5, 4.6, 5.5, 6.8])); // Output: [2.2, 4.6, 6.8] (rounded: 2, 4, 6)
// console.log(filterEvenNumbers([1.6, 2.5, 3.2, 4.5, 5.0, 6.5, 7.6])); // Output: [2.5, 4.5, 6.5] (rounded: 2, 4, 6)

// console.log(reverseString("hello")); // Output: "olleh"

// function reverseString(str) {
//     // Convert the string to an array of characters
//     const chars = str.split("");
//     console.log(chars);
    
//     // Reverse the array using the reverse() method
//     chars.reverse();
    
//     // Join the array back into a string
//     return chars.join("");
// }

// console.log(reverseString("javascript")); // Output: "tpircatsavaj"

// console.log(findMax([3, 5, 7, 2, 8])); // Output: 8

// function findMax(arr) {
//     // Initialize the maximum value to the first element of the array
//     let max = arr[0];
    
//     // Iterate through the array starting from the second element
//     for (let i = 1; i < arr.length; i++) {
//         // If the current element is greater than the maximum value, update the maximum value
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
    
//     // Return the maximum value
//     return max;
// }

// console.log(findMax([2, 1, 5, 3, 4])); // Output: 5

// console.log("Start");

// setTimeout(() => {
//   console.log("Inside setTimeout");
// }, 0);

// Promise.resolve().then(() => console.log("Inside Promise"));

// console.log("End");

const promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve("Promise resolved!");
    } else {
      reject("Promise rejected!");
    }
  });
  
  promise
    .then((message) => console.log(message)) // "Promise resolved!"
    .catch((error) => console.error(error));
  