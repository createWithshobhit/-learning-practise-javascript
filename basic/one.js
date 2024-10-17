//in basic javascript we study about syntax, variables, data-types(primitive.non-primitive),
//control Structure,all loops. switch case functions etc...
// practise todo app, guess the number etc...

//dom-manuplation html changes using js..practise alot.
//es6 and async js
//import export syntax, arrow function,destructing object, spread and rest oprators
//callbacks,promises,async/await
//react js prjoect on using top of this...



//start
//1. Syntax:
//JavaScript's syntax is the set of rules that define how the language is written. Some key elements include:

//Statements: Each instruction is a statement, typically ending with a semicolon (;), though it's optional
let a = 10; // Statement
console.log(a); // Statement

//Comments:

//Single-line: // comment
//Multi-line: /* comment */
// This is a single-line comment
/* This is a multi-line
   comment */

   //2. Variables:
// Variables store data that can be used or manipulated later. In JavaScript, variables are declared using var, let, or const.

// var: Declares a variable (function-scoped). Its value can be updated and re-declared.
var x = 10;
x = 20; // Reassigned value

//let: Block-scoped, introduced in ES6. It can be updated but not re-declared within the same scope.
let y = 30;
y = 40; // Reassigned value

//const: Block-scoped, introduced in ES6. Its value cannot be updated or re-declared after the initial assignment.
const z = 50;
// z = 60; // This would cause an error

//3. Data Types:

//Primitive data types:

// Number: Represents integers and floating-point numbers.
10, 3.14, Infinity, -Infinity, NaN

// String: Represents textual data.
 "Hello", 'World', `Hello ${name}`

 // Boolean: Represents true or false values.
 true, false

// Undefined: Represents a variable that has not been assigned a value.
 let g; // g is undefined
 console.log(g); // Output: undefined
 g = 10; // Assigning a value to g
 console.log(g); // Output: 10
 g = undefined; // Resetting g to undefined
 console.log(g); // Output: undefined
 delete g; // Deleting the variable g
 console.log(g); // Output: undefined
 g = null; // Assigning null to g
 console.log(g); // Output: null
 g = {}; // Assigning an object to g
 console.log(g); // Output: {}
 g = []; // Assigning an array to g
 console.log(g); // Output: []
 g = function() {}; // Assigning a function to g
 console.log(g); // Output: [Function: g]
 g = Symbol(); // Assigning a symbol to g
 console.log(g); // Output: Symbol()
 g = new Date(); // Assigning a Date object to g
 console.log(g); // Output: Date {2022-04-12T17:23:34.348Z}
 g = new RegExp(); // Assigning a RegExp object to g
 console.log(g); // Output: /(?:)/
 g = new Error(); // Assigning an Error object to g
 console.log(g); // Output: Error:
 g = new Map(); // Assigning a Map object to g
 console.log(g); // Output: Map(0) {}
 g = new Set(); // Assigning a Set object to g
 console.log(g); // Output: Set() {}
 g = new WeakMap(); // Assigning a WeakMap object to g
 console.log(g); // Output: WeakMap {}
 g = new WeakSet(); // Assigning a WeakSet object to g
 console.log(g); // Output: WeakSet {}
 g = new Promise(() => {}); // Assigning a Promise object to g
 console.log(g); // Output: Promise { <pending> }
 g = new GeneratorFunction(); // Assigning a GeneratorFunction object to g
 console.log(g); // Output: [Function: GeneratorFunction]
 g = new AsyncFunction(); // Assigning an AsyncFunction object to g
 console.log(g); // Output: [Function: AsyncFunction]
 g = new Proxy({}, {}); // Assigning a Proxy object to g

 // Non-primitive data types:
 // Objects: Represents collections of key-value pairs.
 let obj = { name: "John", age: 30 };
 console.log(obj); // Output: { name: "John", age: 30 }

 // Arrays: Represents ordered lists of values.
 let arr = [1, 2, 3, 4, 5];
 console.log(arr); // Output: [1, 2, 3, 4, 5]

 // Functions: Represents a block of code that can be called or executed.
 function greet() {
   console.log("Hello, World!");
 }
 greet(); // Output: Hello, World!

 // Regular expressions: Represents a pattern that can be used to match text.
 let regex = /hello/i;
 console.log(regex); // Output: /hello/i

 //4. Control Structures:

// Conditional statements:
 let age = 18;
 if (age >= 18) {
   console.log("You are eligible to vote.");
 } else {
   console.log("You are not eligible to vote.");
 }

// Switch statements:
 let month = 3;
 switch (month) {
   case 1:
   case 2:
   case 3:
     console.log("Spring");
     break;
   case 4:
   case 5:
   case 6:
     console.log("Summer");
     break;
   case 7:
   case 8:
   case 9:
     console.log("Autumn");
     break;
   case 10:
   case 11:
   case 12:
     console.log("Winter");
     break;
   default:
     console.log("Invalid month.");
 }
 //5. Loops:
  // For loop:
 for (let i = 0; i < 5; i++) {
    console.log(i);
 }
 // While loop:
 let j = 0;
 while (j < 5) {
    console.log(j);
    j++;
 }
 // Do-while loop:
 let k = 0;
 do {
    console.log(k);
    k++;
 } while (k < 5);
 //6. Functions:
 function greet(name) {
   console.log(`Hello, ${name}!`);
 }
 greet("John"); // Output: Hello, John!
 //7. Arrays:
 let fruits = ["apple", "banana", "cherry"];
 console.log(fruits[0]); // Output: apple
 fruits.push("date"); // Add an element at the end of the array
 console.log(fruits); // Output: ["apple", "banana", "cherry", "date"]
 fruits.pop(); // Remove the last element from the array
 console.log
 //8. Objects:
  let person = { name: "John", age: 30 };
 console.log(person.name); // Output: John
 person.age = 31; // Update the value of a property
 console.log(person); // Output: { name: "John", age: 31 }
 delete person.name; // Remove a property from the object
 console.log(person); // Output: { age: 31 }
 //9. DOM Manipulation:
 // Create an element
 let element = document.createElement("p");
 // Set the text content
 element.textContent = "Hello, World!";
 // Append the element to the body
 document.body.appendChild(element);
 //10. ES6 and Async/Await:
 // Arrow function
 const greetArrow = (name) => {
   console.log(`Hello, ${name}!`);
 };
 greetArrow("John"); // Output: Hello, John!
 // Promise
 const promise = new Promise((resolve, reject) => {
   setTimeout(() => {
     resolve("Hello, World!");
   }, 1000);
 });
 promise.then((message) => {
   console.log(message); // Output: Hello, World!
 });
 // Async/await
 async function greetAsync() {
   const message = await promise;
   console.log(message); // Output: Hello, World!
 }
 greetAsync();
 //11. Error handling:
 try {
   const invalidVariable = undefined; // Replace with a valid variable
   console.log(invalidVariable); // This will throw an error
 } catch (error) {
   console.error("Error:", error);
 }
 //12. Modules:
 // Exporting a function
 export function greetExport(name) {
   console.log(`Hello, ${name}!`);
 }
 // Importing a function
 import { greetExport } from "./module.js";
 greetExport("John"); // Output: Hello, John!
 // Exporting an object
 export const personExport = { name: "John", age: 30 };
 // Importing an object
 import { personExport } from "./module.
 console.log(personExport.name); // Output: John
 // Exporting a class
 export class GreetClass {
   constructor(name) {
     this.name = name;
   }
   greet() {
     console.log(`Hello, ${this.name}!`);
   }
 }
 // Importing a class
 import { GreetClass } from "./module.js";
 const greetClass = new GreetClass("John");
 greetClass.greet(); // Output: Hello, John!
 // Exporting a default export
 export default function greetDefault(name) {
   console.log(`Hello, ${name}!`);
 }
 // Importing a default export
 import greetDefault from "./module.js";
 greetDefault("John"); // Output: Hello, John!
 //13. Promises:
 // Creating a promise
 const promise = new Promise((resolve, reject) => {
   setTimeout(() => {
     resolve("Hello, World!");
   }, 1000);
   reject("Failed to fetch data");
   // reject("Error: Invalid data");
   // reject(new Error("Error: Invalid data"));
 });
 // Handling the promise
 promise.then((message) => {
   console.log(message); // Output: Hello, World!
 }).catch((error) => {
   console.error("Error:", error); // Output: Error: Failed to fetch data
 });
 //14. Fetch API:
 fetch("https://api.example.com/data")
  .then((response) => {
     if (!response.ok) {
       throw new Error(`HTTP error! status: ${response.status}`);
     }
     return response.json();
   })
  .then((data) => {
     console.log(data);
   })
  .catch((error) => {
     console.error("Error:", error);
   });
 //15. Web Workers:
 // Create a new worker
 const worker = new Worker("./worker.js");
 // Send a message to the worker
 worker.postMessage("Hello, World!");
 // Receive messages from the worker
 worker.onmessage = (event) => {
   console.log(event.data); // Output: Hello, World!
 };
 //16. Websockets:
 // Create a new WebSocket connection
 const socket = new WebSocket("ws://localhost:8080");
 // Send a message to the server
 socket.send("Hello, World!");
 // Receive messages from the server
 socket.onmessage = (event) => {
   console.log(event.data); // Output: Hello, World!
 };
 // Close the WebSocket connection
 socket.close();
  ```

// This JavaScript code demonstrates various concepts, including variables,
//  data types, operators, control structures, loops, functions, arrays, objects,
//   DOM manipulation, ES6 features, async/await, error handling, modules, promises, 
//   fetch API, web workers, and websockets. The code also includes comments to explain each section.