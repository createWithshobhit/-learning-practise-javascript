// const promiseOne = new Promise(function(resolve, reject) {
//     // Do async task
//     // DB calls, cryptography, etc.
//     setTimeout(function() {
//         console.log("hi");
//         resolve();
//     }, 1000); // Added a delay for the setTimeout
// });

// promiseOne.then(function() {
//     console.log("promise task consumed");
// });

// // Break

// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("async task 2");
//         resolve();
//     }, 1000); // Added a delay for the setTimeout
// }).then(function() {
//     console.log("task 2 resolved");
// });

// // Break

// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve({username: "abc", email: "abc@example.com"});
//     }, 1000);
// });

// promiseThree.then(function(user) {
//     console.log(user);
// });

// // Break

// const promiseFour = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let error = true;
//         if (!error) {
//             resolve({username: "shobhit", password: "1234567"});
//         } else {
//             reject("something went wrong");
//         }
//     }, 1000);
// });

// promiseFour
//     .then(function(user) {
//         console.log(user); // Corrected the typo in console.log
//         return user; // Return the user object for the next then block
//     })
//     .then(function(user) {
//         console.log(user.username); // Now logging the username to the console
//     })
//     .catch(function(error) {
//         console.error(error); // Handling the error if the promise is rejected
//     });


// const promiseFive = new Promise (function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if (!error) {
//             resolve({username: "shobhit", password: "1234567"});
//         } else {
//             reject("something went wrong here");
//         }
//     },1000)
// });
// async function consumePromiseFive(){
//    try{const response = await promiseFive
//     console.log(response);
// }catch(error)
// {console.log(error);    
//      }
//   }
// consumePromiseFive();


// async function getUserInfo (){
//  try{   const response = await fetch('https://randomuser.me/api/')
//     console.log(response);
//     const data =  await response.json()
//     console.log(data);
// } catch(error){
// console.log("E:", error);
// }
// }
//       getUserInfo() ; 
async function getUserInfo (){
      const response = await fetch('https://randomuser.me/api/')
       const data =  await response.json()
       console.log(data);
   
}
         getUserInfo() ;
      