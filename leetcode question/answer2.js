// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// arr = [1,3,5,7,9]

const arr =[1,3,5,7,9]
function minMaxSum(){
    const totalSum = arr.reduce((a, b) => a + b, 0);

    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);

    const minSum = totalSum - maxValue;

    const maxSum = totalSum - minValue;

    console.log(minSum, maxSum);


}
minMaxSum(arr); // 