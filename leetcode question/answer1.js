
//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with 6th places after the decimal.



//question first
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    const n = arr.length;
    let posCount =0;
    let negCount =0;
    let zeroCount =0;
    
     arr.forEach(num => {
        if (num > 0) {
            posCount += 1;
        } else if (num < 0) {
            negCount += 1;
        } else {
            zeroCount += 1;
        }
    });
 const posRatio = posCount / n;
    const negRatio = negCount / n;
    const zeroRatio = zeroCount / n;

    // Print the ratios with 6 decimal places
    console.log(posRatio.toFixed(6));
    console.log(negRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
