//===========================================
//           JavaScript Notes
//===========================================

//===========================================
//        Variable Declaration in JS
//===========================================
// let, var, const - where let >> var (better)
//
// Differences between let and var:
// - let: Block-scoped (only available inside the block where it's defined).
// - var: Function-scoped (available throughout the function in which it's declared).

//let name = "Alice"; // Block-scoped variable
var age = 30; // Function-scoped variable
const birthYear = 1993; // Constant, cannot be reassigned

//===========================================
//              Printing
//===========================================
// Use console.log() to print single or multiple values.

console.log("Hello World");

const accountId = 144553;
let accountEmail = "chandni@google.com";
var accountPassword = "12345";
let accountCity = "Jaipur";

console.table([accountId, accountEmail, accountPassword, accountCity]);

//===========================================
//            Data Types in JS
//===========================================
// JavaScript has several data types:
// - number, bigint, string, boolean, null, undefined, symbol

let num = 42;
let bigIntNum = BigInt(123456789012345678901234567890);
let str = "Hello";
let isTrue = true;
let emptyValue = null;
let notDefined;
let sym = Symbol("unique");

// Check data type
console.log(typeof num); // "number"

// Convert the data type
let numStr = String(num); // "42"

// Concatenation
let str1 = "hello";
let str2 = "world";
console.log(str1 + str2); // "helloworld"

// Pre-increment and Post-increment
let x = 5;
console.log(++x); // 6 (pre-increment)
console.log(x++); // 6 (current value, post-increment)
console.log(x); // 7 (value after post-increment)

// Using constructor and literal
let y = new Number(5); // Object
let z = 5; // Primitive
console.log(y); // [Number: 5]
console.log(z); // 5

//===========================================
//              Operators
//===========================================
// 1. Comparison Operators
// - >, <, >=, <=, ==, ===

console.log(5 > 3); // true
console.log(5 === '5'); // false (strict equality)
console.log(5 == '5'); // true (loose equality)

// 2. Arithmetic Operators
// - +, -, *, /, %

console.log(5 + 3); // 8
console.log(5 - 3); // 2
console.log(5 * 3); // 15
console.log(5 / 3); // 1.666...
console.log(5 % 3); // 2

//===========================================
//            String Methods
//===========================================

const name = "Chandni";
const univ = "IIITK";

console.log(`I am ${name} and I study in ${univ}`);

const roll = new String("cse21030");
console.log(roll[0]); // 'c'
console.log(roll.length); // 8
console.log(roll.charAt(2)); // 'e'
console.log(roll.indexOf('e')); // 2

const newStr = roll.substring(0, 4);
console.log(newStr); // 'cse2'

const newStringOne = " chandni ";
console.log(newStringOne.trim()); // 'chandni'

const url = "https://chandni.com/chandni%20choudhary";
console.log(url.replace('%20', '-')); // 'https://chandni.com/chandni-choudhary'
console.log(url.includes('sundar')); // false
console.log(url.split('/')); // ['https:', '', 'chandni.com', 'chandni%20choudhary']

//===========================================
//          Math and Numbers
//===========================================

const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(balance.toString().length); // 3
console.log(balance.toFixed(1)); // '100.0'

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4)); // '123.9'

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // '10,00,000'

// Math Object Methods
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 3, 6, 8)); // 3
console.log(Math.max(4, 3, 6, 8)); // 8
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1); // Random integer between 1 and 10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random number between 10 and 20

//===========================================
//                Dates
//===========================================

let myDate = new Date();
console.log(myDate.toString()); // Full date string
console.log(myDate.toDateString()); // Short date string
console.log(myDate.toLocaleString()); // Locale-specific date and time
console.log(typeof myDate); // 'object'

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toLocaleString()); // '1/23/2023, 12:00:00 AM'

let myTimeStamp = Date.now();
console.log(myTimeStamp); // Current timestamp in milliseconds

console.log(myCreatedDate.getTime()); // Timestamp of myCreatedDate
console.log(Math.floor(Date.now() / 1000)); // Current timestamp in seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); // Current month (1-12)
console.log(newDate.getDay()); // Day of the week (0-6)

// Using locale string to get day name
console.log(newDate.toLocaleString('default', { weekday: 'long' })); // e.g., 'Saturday'

//===========================================
//                Arrays
//===========================================
// Arrays can hold multiple types of elements.

let A = ["ram", 1, true, "mango", 5, 6];
console.log(A[0]); // "ram"

// Array Methods: push, pop, unshift, shift, etc.
A.push("new item"); // Adds to the end
A.pop(); // Removes from the end
A.unshift("start item"); // Adds to the beginning
A.shift(); // Removes from the beginning

// slice() vs. splice()
let slicedArray = A.slice(0, 2); // ['start item', 'ram']
let splicedArray = A.splice(0, 2); // A = ['mango', 5, 6]

// Concatenation and Spread Operator
let B = [4, 5];
let concatenatedArray = A.concat(B); // ['mango', 5, 6, 4, 5]
let spreadArray = [...A, ...B]; // ['mango', 5, 6, 4, 5]

// Flattening Arrays
let nestedArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
let flatArray = nestedArray.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7]

// Checking if something is an Array
console.log(Array.isArray("chandni")); // false
console.log(Array.from("chandni")); // ['c', 'h', 'a', 'n', 'd', 'n', 'i']

// Creating arrays from arguments or elements
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]

//===========================================
//               Objects
//===========================================
// Objects are collections of key-value pairs.

const user = {
  name: "a",
  roll: "2",
  surname: "b",
};

console.log(user.name); // Accessing property with dot notation
console.log(user["surname"]); // Accessing property with bracket notation

// Adding methods to objects
user.greeting = function () {
  console.log("Hello JS user");
};

user.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

user.greeting();
user.greetingTwo();

// Object keys, values, and entries
console.log(Object.keys(user)); // ['name', 'roll', 'surname', 'greeting', 'greetingTwo']
console.log(Object.values(user)); // ['a', '2', 'b', [Function], [Function]]
console.log(Object.entries(user)); // [['name', 'a'], ['roll', '2'], ['surname', 'b'], ...]

// Merging objects
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4); // { a: 1, b: 2, c: 3 }

// Using the spread operator to merge objects
const obj5 = { ...obj1, ...obj2, ...obj3 };
console.log(obj5); // { a: 1, b: 2, c: 3 }

// Freezing and Sealing objects
Object.freeze(obj5);
obj5.a = 42; // Will not change the value of a because the object is frozen
console.log(obj5.a); // 1

Object.seal(obj5);
obj5.b = 100; // Can modify existing properties but can't add new ones
console.log(obj5.b); // 100

//===========================================
//               Loops
//===========================================

// 1. For loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// 2. While loop
let j = 0;
while (j <= 10) {
  console.log(j);
  j++;
}

// 3. Do-while loop
let k = 0;
do {
  console.log(k);
  k++;
} while (k <= 10);

// 4. For-in loop: Iterates over enumerable properties of an object.
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

// 5. For-of loop: Iterates over iterable objects like arrays.
const array = [10, 20, 30];
for (const value of array) {
  console.log(value);
}

//===========================================
//               Functions
//===========================================

// Function Declaration
function add(a, b) {
  return a + b;
}

// Function Expression
const subtract = function (a, b) {
  return a - b;
};

// Arrow Function
const multiply = (a, b) => a * b;

console.log(add(2, 3)); // 5
console.log(subtract(5, 3)); // 2
console.log(multiply(4, 5)); // 20

// Function with Default Parameters
function greet(name = "Guest") {
  return `Hello, ${name}`;
}

console.log(greet("Alice")); // 'Hello, Alice'
console.log(greet()); // 'Hello, Guest'

//===========================================
//             Scope in JS
//===========================================
// Global, Block, and Function scope.
// let and const are block-scoped, var is function-scoped.

let globalVar = "global";

if (true) {
  let blockVar = "block";
  console.log(blockVar); // 'block'
}

console.log(globalVar); // 'global'

//===========================================
//             IIFE (Immediately Invoked Function Expression)
//===========================================

(function () {
  console.log("IIFE is called immediately");
})();

//===========================================
//              Closures
//===========================================

function outer() {
  let outerVar = "I'm from the outer function";

  function inner() {
    console.log(outerVar);
  }

  return inner;
}

const innerFunc = outer();
innerFunc(); // "I'm from the outer function"

//===========================================
//              Hoisting
//===========================================

// Variables declared with var are hoisted to the top of their scope and initialized with undefined.
console.log(hoistedVar); // undefined
var hoistedVar = "This is hoisted";

// Functions can be called before they are declared.
console.log(hoistedFunction()); // 'This function is hoisted'

function hoistedFunction() {
  return "This function is hoisted";
}

// Variables declared with let and const are not hoisted.
try {
  console.log(nonHoistedVar); // ReferenceError
  let nonHoistedVar = "This is not hoisted";
} catch (error) {
  console.log(error.message);
}

//===========================================
//              Callback Functions
//===========================================

function greetUser(callback) {
  console.log("Hello User");
  callback();
}

function showMessage() {
  console.log("Welcome to JavaScript");
}

greetUser(showMessage);

//===========================================
//              Promises
//===========================================

const myPromise = new Promise((resolve, reject) => {
  let condition = true;

  if (condition) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected");
  }
});

myPromise
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

//===========================================
//          Async/Await
//===========================================

async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await response.json();
  console.log(data);
}

fetchData();

//===========================================
//         Event Handling in JS
//===========================================

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#myButton");
  button.addEventListener("click", () => {
    alert("Button clicked!");
  });
});

//===========================================
//           ES6 Modules
//===========================================
// Import and export statements for modular code.
// Example module.js file:
// export const name = "Alice";
// export function greet() {
//   return "Hello, Alice";
// }

// Import in main.js file:
// import { name, greet } from "./module.js";
// console.log(name); // 'Alice'
// console.log(greet()); // 'Hello, Alice'

//===========================================
//           Error Handling
//===========================================

try {
  let a = 10;
  if (a === 10) throw "This is an error";
} catch (error) {
  console.log(error);
} finally {
  console.log("This block executes regardless of the result");
}

//===========================================
//          Prototypes and Classes
//===========================================

// Prototypes allow you to add properties and methods to objects.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

const john = new Person("John", 30);
console.log(john.greet()); // 'Hello, my name is John'

// ES6 Classes
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  describe() {
    return `${this.name} is a ${this.type}`;
  }
}

const dog = new Animal("Rex", "dog");
console.log(dog.describe()); // 'Rex is a dog'
