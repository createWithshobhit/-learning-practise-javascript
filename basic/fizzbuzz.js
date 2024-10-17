function fizzbuzz(n){
    for(let i=1; i<=n; i++){
        if(i%3===0 && i%5===0){
            console.log('FizzBuzz');
        }else if(i%3===0){
            console.log('Fizz');
        }else if(i%5===0){
            console.log('buzz');
        }else{
            console.log(i);
        }
    }
};

fizzbuzz(20);

//find a mediun
function findMedian(arr) {
    // Step 1: Sort the array
    // arr.sort((a, b) => a - b);
      arr.sort()
    // Step 2: Calculate the median
    const length = arr.length;
    let median;

    if (length % 2 === 1) {
        // If the length is odd, return the middle element
        median = arr[Math.floor(length / 2)];
    } else {
        // If the length is even, return the average of the two middle elements
        const mid1 = arr[length / 2 - 1];
        const mid2 = arr[length / 2];
        median = (mid1 + mid2) / 2;
    }

    return median;
}

// Example usage:
const array = [5, 3, 1, 2, 4,8,9,3,4,5];
const median = findMedian(array);
console.log(`The median of the array is: ${median}`); // Output: The median of the array is: 3

//find the mode

function findMode(arr) {
    // Step 1: Create an object to store the frequency of each element
    const frequencyMap = {};
    arr.forEach((num) => {
        if (frequencyMap[num]) {
            frequencyMap[num]++;
        } else {
            frequencyMap[num] = 1;
        }
    });

    // Step 2: Find the element(s) with the highest frequency
    let maxFrequency = 0;
    let modes = [];
    for (const num in frequencyMap) {
        if (frequencyMap[num] > maxFrequency) {
            maxFrequency = frequencyMap[num];
            modes = [num];
        } else if (frequencyMap[num] === maxFrequency) {
            modes.push(num);
        }
    }

    return modes;
}

// Example usage:

const arr = [5, 3, 1, 2, 4, 8, 9, 3, 4, 5];
const modes = findMode(arr);
console.log(`The mode(s) of the array are: ${modes}`); // Output: The mode(s) of the array are: 3, 4, 5

//find the range