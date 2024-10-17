let m=5;
let n=10;
console.log(m>n || n>m);//here n is greather than m one condition is met so output is true.
console.log(m>n && n>m);// here and operator check both value but only one is met so output is false.

let x=true;
let y = false;
function getName(){
    return "shobhit";
}

console.log(x || getName());//here || operator check first value if it's true then it will return true else it will check second value.

console.log(x && getName());//here && operator check first value if it's false then it will return false else it will check second value.

let z=10;

console.log(z++ > 10 && ++z < 20); // here first increment operator (++z) is performed then condition check.

console.log(z++ > 10 || ++z < 20); // here first increment operator (++z) is performed then condition check.

console.log(z++ > 10 && ++z < 20 || z++ < 15); // here first increment operator (++z) is performed then condition check.

console.log(z++ > 10 || ++z < 20 && z++ < 15); // here first increment operator (++z) is performed then condition check.

console.log(z++ > 10 || ++z < 20 && z++ < 15 || z++ < 10); // here first increment operator (++z) is performed then condition check.

console.log(z++ > 10 || ++z < 20 && z++ < 15 || z++ < 10 && z++ > 5); // here first increment operator (++z) is performed then condition check.

console.log(z++ > 10 || ++z < 20 && z++ < 15 || z++ < 10 && z++ > 5 && z++ % 2 === 0); // here first increment operator (++z) is performed then condition check.

console.log(z++ > 10 || ++z < 20 && z++ < 15 || z++ < 10 && z++ > 5 && z++ % 2 === 0 && z++ % 3 === 0); // here first increment operator (++z) is performed then condition check.

console.log(z++ > 10 || ++z < 20 && z++ < 15 || z++ < 10 && z++ > 5 && z++ % 2 === 0 && z++ % 3 === 0 && z++ % 5 === 0); // here first increment operator (++z) is performed then condition check.

console.log(z++ > 10 || ++z < 20 && z++ < 15 || z++ < 10 && z++ > 5 && z++ % 2 === 0 && z++ % 3 === 0 && z++ % 5 === 0 && z++ % 7 === 0); // here first increment operator (++z) is performed then condition check.

