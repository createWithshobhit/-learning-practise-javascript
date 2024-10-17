function reverseString(str) {
    // Your code here
     const char =str.split("").reverse().join("");
     console.log(char);
     return char;
     
  }
  reverseString("hello"); // "olleh"

//question 2
function isPrime(num) {
    // Your code here
    if(num<=1)return false;
    for(let i=2;i<num;i++){
        if(num % i === 0) return false;
        else{
            return true;
        }
    }
  }
  console.log(isPrime(7)); // true
  console.log(isPrime(4)); // false
  
  //question 3
  function removeDuplicates(arr) {
    // Your code here
    const uniqueArray = [...new Set(arr)];
    console.log(uniqueArray);
    return uniqueArray;
  }
  removeDuplicates([1, 2, 3, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]

  