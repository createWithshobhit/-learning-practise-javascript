console.log('start');
import { variable } from "./day2.js";
console.log(variable);

var anything =1;
console.log(anything);





// const today = new Date();
// const day = today.getDay();
// const daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



// console.log(`Today is: ${daylist[day]}.`);

// let hour = today.getHours();
// const minute = today.getMinutes();
// const second = today.getSeconds();
// let prepand = (hour >= 12) ? 'PM' : 'AM';
// hour = (hour >= 12) ? hour - 12 : hour;

// if (hour === 0 && prepand === 'PM') {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         prepand = 'Noon';
//     } else {
//         hour = 12;
//         prepand = 'PM';
//     }
// }

// if (hour === 0 && prepand === 'AM') {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         prepand = 'Midnight';
//     } else {
//         hour = 12;
//         prepand = 'AM';
//     }
// }

// console.log(`Current Time: ${hour} ${prepand}: ${minute} : ${second}`);

// // This function will update the HTML elements every second
// function showTime() {
//     const now = new Date();
//     const currentDay = now.getDay();
//     let currentHour = now.getHours();
//     const currentMinute = now.getMinutes();
//     const currentSecond = now.getSeconds();
//     let currentPrepand = (currentHour >= 12) ? 'PM' : 'AM';
//     currentHour = (currentHour >= 12) ? currentHour - 12 : currentHour;

//     if (currentHour === 0 && currentPrepand === 'PM') {
//         if (currentMinute === 0 && currentSecond === 0) {
//             currentHour = 12;
//             currentPrepand = 'Noon';
//         } else {
//             currentHour = 12;
//             currentPrepand = 'PM';
//         }
//     }

//     if (currentHour === 0 && currentPrepand === 'AM') {
//         if (currentMinute === 0 && currentSecond === 0) {
//             currentHour = 12;
//             currentPrepand = 'Midnight';
//         } else {
//             currentHour = 12;
//             currentPrepand = 'AM';
//         }
//     }

//     document.getElementById('day').innerHTML = 'Today is: ' + daylist[currentDay] + '.';
//     document.getElementById('time').innerHTML = 'Current Time: ' + currentHour + ' ' + currentPrepand + ': ' + currentMinute + ' : ' + currentSecond;
// }

// setInterval(showTime, 1000); // Call showTime function every second.
// // print current page//
// function printPage (){
//     window.print()
//     console.log('print window sucessfully');
    
// };
// //compare to object property//
// const maches =(obj,source)=>
//     Object.keys(source).every(key=>
//         obj.hasOwnProperty(key)&& obj[key]=== source[key]);

// let person = {name: 'John', age: 30, city: 'New York'};
// let person2 = {name: 'John', age: 30, city: 'New York'};
// console.log(maches(person, person2)); // Output: true
// let person3 = {name: 'John', age: 31, city: 'New York'};
// console.log(maches(person, person3)); // Output: false
// //copy a string//
// function copyToClipboard(str) {
//     const el = document.createElement('textarea');
//     el.value = str;
//     document.body.appendChild(el);
//     el.select();
//     document.execCommand('copy');
//     document.body.removeChild(el);
//     console.log('copying string function run sucessfully');   
// }
// copyToClipboard('hello');
// //
