//---------------------------------------------------------------------------------------------------------------------------------
// Window and Document
//---------------------------------------------------------------------------------------------------------------------------------
// The window object represents the browser's window.
// The document object represents the HTML document loaded in the window.

console.log(window.innerWidth); // Accesses window's inner width
console.log(window.document.URL); // Accesses document's URL

//---------------------------------------------------------------------------------------------------------------------------------
// getElementById
//---------------------------------------------------------------------------------------------------------------------------------
// Retrieves an element by its ID attribute.

let elementById = document.getElementById('myElementId');

// Example:
elementById.style.color = 'blue'; // Sets the color of element with ID 'myElementId' to blue

//---------------------------------------------------------------------------------------------------------------------------------
// getElementsByClassName
//---------------------------------------------------------------------------------------------------------------------------------
// Retrieves elements by their class name.

let elementsByClass = document.getElementsByClassName('myClassName');

// Example:
for (let i = 0; i < elementsByClass.length; i++) {
    elementsByClass[i].style.fontWeight = 'bold'; // Sets the font weight of all elements with class 'myClassName' to bold
}

//---------------------------------------------------------------------------------------------------------------------------------
// querySelector
//---------------------------------------------------------------------------------------------------------------------------------
// Retrieves the first element that matches a CSS selector.

let firstElement = document.querySelector('#myId .myClass');

// Example:
firstElement.innerHTML = 'Updated content'; // Sets the HTML content of the first element matching '#myId .myClass' to 'Updated content'

//---------------------------------------------------------------------------------------------------------------------------------
// querySelectorAll
//---------------------------------------------------------------------------------------------------------------------------------
// Retrieves all elements that match a CSS selector.

let allElements = document.querySelectorAll('.myClass');

// Example:
allElements.forEach(function(element) {
    element.style.backgroundColor = 'yellow'; // Sets the background color of all elements with class 'myClass' to yellow
});

//---------------------------------------------------------------------------------------------------------------------------------
// Style
//---------------------------------------------------------------------------------------------------------------------------------
// Accesses and modifies element styles.

elementById.style.fontSize = '20px'; // Sets the font size of element with ID 'myElementId' to 20 pixels

//---------------------------------------------------------------------------------------------------------------------------------
// Attribute
//---------------------------------------------------------------------------------------------------------------------------------
// Accesses and modifies element attributes.

console.log(elementById.getAttribute('src')); // Retrieves the 'src' attribute of element with ID 'myElementId'
elementById.setAttribute('src', 'newImage.png'); // Sets the 'src' attribute of element with ID 'myElementId' to 'newImage.png'

// Example of overwriting an attribute:
elementById.setAttribute('data-id', '123'); // Sets 'data-id' attribute to '123'
elementById.setAttribute('data-id', '456'); // Overwrites 'data-id' attribute to '456'

//---------------------------------------------------------------------------------------------------------------------------------
// innerText vs innerHTML
//---------------------------------------------------------------------------------------------------------------------------------
// innerText: Gets or sets the visible text content of an element.
// innerHTML: Gets or sets the HTML content of an element.

console.log(elementById.innerText); // Retrieves visible text content of element with ID 'myElementId'
console.log(elementById.innerHTML); // Retrieves HTML content of element with ID 'myElementId'

// Example:
elementById.innerText = 'New text content'; // Sets visible text content of element with ID 'myElementId' to 'New text content'
elementById.innerHTML = '<strong>New</strong> HTML content'; // Sets HTML content of element with ID 'myElementId' to '<strong>New</strong> HTML content'

//---------------------------------------------------------------------------------------------------------------------------------
// textContent
//---------------------------------------------------------------------------------------------------------------------------------
// Gets or sets the combined text content of an element, including INVISIBLE TEXT nodes.

console.log(elementById.textContent); // Retrieves combined text content of element with ID 'myElementId'

//---------------------------------------------------------------------------------------------------------------------------------
// NodeList and HTMLCollection
//---------------------------------------------------------------------------------------------------------------------------------
// NodeList: A collection of nodes returned by methods like getElementsByClassName.
// HTMLCollection: Similar to NodeList but specifically for HTML elements.

elementsByClass.forEach(function(element) {
    console.log(element.textContent); // Logs text content of each element in NodeList 'elementsByClass'
});

// Example of iterating over HTMLCollection 'divList':
let divList = document.getElementsByTagName('div'); // Retrieves all div elements
for (let i = 0; i < divList.length; i++) {
    console.log(divList[i].textContent); // Logs text content of each div element
}

//---------------------------------------------------------------------------------------------------------------------------------
// forEach
//---------------------------------------------------------------------------------------------------------------------------------
// Iterates over each element in a NodeList or HTMLCollection.

allElements.forEach(function(element) {
    element.style.border = '1px solid red'; // Adds red border to each element in NodeList 'allElements'
});

//---------------------------------------------------------------------------------------------------------------------------------
// Difference between querySelector and querySelectorAll
//---------------------------------------------------------------------------------------------------------------------------------
// querySelector: Returns the first element that matches the CSS selector.

let firstDiv = document.querySelector('div'); // Retrieves the first div element

// querySelectorAll: Returns all elements that match the CSS selector as a static NodeList.

let allDivs = document.querySelectorAll('div'); // Retrieves all div elements

// Example of iterating over all div elements found:
allDivs.forEach(function(div) {
    console.log(div.textContent); // Logs text content of each div element
});

//---------------------------------------------------------------------------------------------------------------------------------
// RELATIONS: L33
//---------------------------------------------------------------------------------------------------------------------------------
<div className="week">
    <div className="day">Sunday</div>
    <div className="day">Monday</div>
    <div className="day">Tuesday</div>
    <div className="day">Wednesday</div>
    <div className="day">Thursday</div>
    <div className="day">Friday</div>
    <div className="day">Saturday</div>
</div>
const ancestorX = document.querySelector('week'); // consider 'week' as ancestor
console.log(ancestorX);

// Go from ancestor -> CHILD
const children = ancestorX.children; // Return HTML COLLECTION: 'days' of week => As children of 'week'

console.log(children[0].innerHTML) // "Sunday"
for(let i = 0; i < children.length; i++){
    console.log(children[i].innerText);
    children[i].style.color = 'orange';
}

// firstElementChild : Retrives first element of the ancestor
// lastElementChild : Retrives last element of the ancestor
console.log(ancestorX.firstElementChild); 
console.log(ancestorX.lastElementChild);

// Go from CHILD -> ancestor
const firstDay = document.querySelector('.day') // Sunday
const ancestorOfDays = firstDay.ancestorElement; // week

// Sibling
const secondDay = firstDay.nextElementSibling; // Monday

// ChildNodes : 16:00 in L33 
console.log(ancestorX.childNodes); // Return number of nodes in the ancestorX tree

//---------------------------------------------------------------------------------------------------------------------------------
//CREATE ELEMENT Using DOM   L:33
//---------------------------------------------------------------------------------------------------------------------------------
const newElemet = document.createElement('div'); 
newElemet.className = "weeks";
newElemet.id = "weekId";
newElemet.setAttribute("dayOne", "Sunday");
newElemet.style.backgroundColor = "red";

// how to add text inside 'newElemet' ?
div.innerText = "NEW ELEMENT CREATED";
//or
const addText = document.createTextNode("NEW ELEMENT CREATED");
newElemet.appendChild(addText); // append text to div

// Add this to document
document.body.appendChild(newElemet); // append div to body 

//---------------------------------------------------------------------------------------------------------------------------------
// ADD, EDIT & REMOVE ELEMENTS in DOM  L:34
//---------------------------------------------------------------------------------------------------------------------------------
<body>
    <ul className = "language">
        <li>JavaScript</li>
    </ul>
</body>

// ------ ADD ------
// 1. innerHTML & textContent travels through whole Node (Slowest)
function addLanguage(langName){
    const newLi = document.createElement('li');
    newLi.innerHTML = langName;
    const ancestorUl = document.querySelector('.language');
    ancestorUl.appendChild(newLi);
}
addLanguage("python");

// 2. Create a node and append it (Faster)
function addLanguageOptimal(langName){
    const newLi = document.createElement('li');
    newLi.append(document.createTextNode(langName));
    const ancestorUl = document.querySelector('.language');
    ancestorUl.appendChild(newLi);
}
addLanguageOptimal("React");

// ------ EDIT ------
const secLang = document.querySelector("li:nth-child(2)"); // select 2nd child(1 based indexing)
// secLang.textContent = "Angular"; // High Time 
const newLang = document.createElement("li"); // TYPE
newLang.innerText = "Go Lang";
secLang.replaceWith(newLang); 

// use outerHTML
secLang.outerHTML = "<li>Flutter</li>";

// Creating new Node
const newLangNode = document.createTextNode("TypeScript");
secLang.replaceChild(newLangNode, secLang); // replace textNode with new

// ----- REMOVE -----
const lastLang = document.querySelector("li:last-child");
lastLang.remove();



//---------------------------------------------------------------------------------------------------------------------------------
// PROJECTS : COMPLETED TILL 41:00
//---------------------------------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------------------------------
// EVENTS  L:36
//---------------------------------------------------------------------------------------------------------------------------------

//Adding event on HTML (VERY BAD)
<button onclick="alert('Hello')">Click Me</button>

//Using direct EVENT (good but not best) => We are restricted to one EVENT at a time
const button = document.querySelector('button');
button.onclick = function(){
    alert('Hello');
};

// Using eventListener(BEST) => Using this we can add lots of EVENT (Hover, click, drag, drop, etc)
const button = document.querySelector("button");
button.addEventListener("click", function(){ //Here 'click' is the event upon which this function will work. There are lots of such events in js(STUDY)
    alert("Hello");
    }, false); // We can avoid writing false(3rd parameter - EVENT PROPAGATION) as by default it's false

    /*----------  EVENT PROPAGATION : TIME(20:00 L:36) ------

    1. Capturing Phase (true) : From top to bottom
    2. Bubbling Phase (false) : From bottom to top 

    eg:
    <div id="grandancestor">
        <div id="ancestor">
            <button id="child">Click Me</button>
        </div>
    </div>
    
    const div1 = document.querySelector("#grandancestor");
    const div2 = document.querySelector("#ancestor");
    const div3 = document.querySelector("#child");

    BUBBLING PHASE: 
    div1.addEventListener("click", function(){
        console.log("grandancestor");
    })

    div2.addEventListener("click", function(){
        console.log("ancestor");
    })

    div3.addEventListener("click", function(){
        console.log("children");
    })

    On clicking on child, it will print(Bottom to Top) :     childern
                                                                ancestor
                                                                grandancestor

     
    CAPTURING PHASE:
    div1.addEventListener("click", function(){
        console.log("grandancestor");
    }, true)

    div2.addEventListener("click", function(){
        console.log("ancestor");
    }, true)

    div3.addEventListener("click", function(){
        console.log("children");
    }, true)

    On clicking on child, it will print(Top to Bottom) :     grandancestor
                                                             ancestor 
                                                             childern

    
    STOP EVENT PROPAGARTION: "stopPropagation()"

    div3.addEventListener("click", function(){
        console.log("children");
        event.stopPropagation();
    })
                                                            
    */                                                        

// EVENT-OBJECT (event or e)
const button = document.querySelector("button");
button.addEventListener("click", function(event){ 
    console.log(event.target); // Button
    console.log(event.type); // click
    });  // we skipped writing 'FALSE'

    // TO LEARN :    type, timeStamp, preventDefault
                //   target, toElement, srcElement, currentTarget
                //   clientX, clientY, screenX, screenY
                //   altKey, ctrlKey, shiftKey, keyCode


// preventDefault : This prevent the default action attached to that button, img, div, or anything
 /*eg. 
 These is a button, on which an URL is attached. Normally on clicking on that button, navigates to that URL
 but with preventDefault, it will not navigate to that URL, it will only execute the function. */

 // target : This gives the information about the div, image, or anything from where event generated
 // currentTarget : This gives the information about the div, image, or anything on which event listener
 //                is attached. It may be different from target if event is propagated.

//  remove & removeChild 
/*
    Lets we want to remove an image
    const img = document.querySelector("img"); // access that image

    img.remove(); // remove directly
    img.ancestorNode.removeChild(img); // remove that image by going to its ancestor

*/


//---------------------------------------------------------------------------------------------------------------------------------
// ASYYNC JS  L:37
//---------------------------------------------------------------------------------------------------------------------------------

/*
Javascript is a 'Synchronous' Language i.e where code executes line by line

It executes : 1. one line at a time 
                    -> Each operation waits for last line to complete before executing current line
              2. JS ENGINE : Call Stack + Memory Heap formed

*/

//   BLOCKING CODE vs NON-BLOCKING CODE
/*
    Blocking Code(Read file: SYNC) : It stops the execution of the code until the operation is completed
    Non-Blocking Code (Read file: ASYNC) : It doesn't stop the execution of the code, it continues with the next line
*/

// HOW ASYNC FUNCTION EXECUTES ?
/*
1. Function Call(CALL STACK)) -> RUNTIME ENV(WEB API/ NODE) -> Register CallBack -> Task Queue -> CALL STACK
   When the operation is completed, the callback function is added to the Task Queue
   When the Call Stack is empty, the callback function is executed from the Task Queue

2. There is a new RUN TIME ENVIRONMENT : (fetch) : It helps priorotise tasks, known as (micro-task queue / priority queue/fetch queue)
    -> If there are lots of calls then the calls made using 'fetch' will be priorotise -: It has separate queue than normal 'task queue'. 
        ->It is executed before the normal task queue. It's a VIP queue

3. If there are lots of Sync and Async functions then always Sync func executes first no matter what (even though Async function have timeout = 0;)
*/


//---------------------------------------------------------------------------------------------------------------------------------
// API request and V8 engine   L:39
//---------------------------------------------------------------------------------------------------------------------------------

// XMLHttpRequest object
const xlr = new XMLHttpRequest();
const reqURL = 'https://jsonplaceholder.typicode.com/todos/1';
xlr.open('GET', reqURL);
console.log(xlr.readyState) // To print the state number (It will show only one number 1)
xlr.onreadystatechange = function(){ // To print all the state 
    console.log(xlr.readyState);
    if(xlr.readyState === 4 ){
        console.log(this.response);
    }    
}
xlr.send(); // send request

//---------------------------------------------------------------------------------------------------------------------------------
// Promises   L:40
//---------------------------------------------------------------------------------------------------------------------------------

// Promise : 
/*
A Promise in JavaScript is like a promise in real life. It represents a task that will finish in the future and gives a result of that task. 
This task can either complete successfully or fail.

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Key Points:

1. **Three States of a Promise**:
   - **Pending**: The initial state. Imagine you're waiting for a friend to deliver a package. You don't know yet if they will deliver it or not.
   - **Fulfilled**: The task completed successfully. Your friend delivers the package as promised.
   - **Rejected**: The task failed. Your friend can't deliver the package, and they tell you that.

2. **Creating a Promise**:
   - We create a promise using the `Promise` constructor.
   - This constructor takes a function with two arguments: `resolve` and `reject`.
     - `resolve`: Call this when the task is done successfully.
     - `reject`: Call this if the task fails.
     - `we can pass OBJECT, STRING, ETC inside resolve and reject or leave it empty.

Example:
*/
// let myPromise = new Promise(function(resolve, reject){});
let myPromise = new Promise((resolve, reject) => {
  // Simulating a task that takes 2 seconds
  setTimeout(() => {
    let taskSuccessful = true; // Change to false to simulate failure
    if (taskSuccessful) {
      resolve("Async Task Completed Successfully"); // connected with "then"
    } else {
      reject("Task Failed"); // connected with "catch"
    }
  }, 2000); // Wait for 2 seconds
});

// Consume: Always pass 'function'/'arraow function' to "then" & "catch" & "finally"
myPromise.then(()=>{ 
    console.log("Task Resolved");
}).catch(()=>{
    console.log("Task Rejected");
})

// HOW TO PASS AND ACCESS OBJECT DATA ?
const promiseTwo = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve({name: "Manjit", email:"manjit@gmail.com"});
    })
}).then((data) =>{ // We can also directly attach ".then" with promise
    console.log(data);
}).catch(() =>{
    console.log("Error Occured");
})

// Chaining of "then": we can use multiple 'then' to access the returned value from the previous 'then'
const promiseThree = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        let everyThingOK = true;
        if(everyThingOK){
            resolve("Task Completed", {name: "Manjit", email: "manjit123@gmail.com"});
        }
        else reject("Error Occured");
    }, 2000);
});

promiseThree.then((user)=>{
    console.log("Task Completed");
    return user.name;
}).then((userName) =>{
    console.log(`Hello ${userName}`);
}).catch(()=>{
    console.log("Error Occured");
}).finally(()=>{ // finally : It's used to show whether promise executed or not. It will always run irrespective of 'Resolve' or 'Reject'
    console.log("Finally Either Resolved or Rejected");
})

// USE async / await with Promises: (Alternate of then, catch, finally)
const promiseFour = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        let everyThingOK = true;
        if(everyThingOK){
            resolve("Task Completed", {name: "Manjit", email: "manjit123@gmail.com"});
        }
        else reject("Error Occured");
    }, 2000);
});

async function consumePromiseFour() { // ALWAYS USE TRY-> CATCH whenever using async/await 
    try {
        let result = await promiseFour;
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}

consumePromiseFour(); // CALL 


// EXAMPLE on Fetching using (async-await) & (then-cach-finally):
// USING ASYNCH/AWAIT::
async function fetchUser(){
    try{
        const userData = await fetch("https://jsonplaceholder.typicode.com/posts?exact=true");
        const user = await userData.json(); // Converts all the data into 'json' data. So takes time
        console.log(user);
    }
    catch(error){
        console.log("Error Occured");
    }
}
fetchUser();

// USING THEN/CATCH/FINALLY::
const data = fetch("https://jsonplaceholder.typicode.com/posts?exact=true");
data.then((response)=>{
    console.log("Data Fetched");
    return response.json(); //<pending>
}).then((jsonData)=>{
    console.log("Data Converted"); //fulfilled>
    console.log(jsonData);
}).catch((error) =>{
    console.log(error); //<rejected>
}).finally(()=>{
    console.log("Finally Either Resolved or Rejected");
});

//---------------------------------------------------------------------------------------------------------------------------------
// Fetch   L:41
//---------------------------------------------------------------------------------------------------------------------------------
/*
Fetch is a function in JavaScript that helps you get data from other places on the internet.
It's like sending a friend to fetch (get/deliver) something for you.

NOTE:** An accurate check for a successful fetch() would include checking that the promise -> RESOLVED. example-: "success", "error 404", all other error codes**
     ** If there is any <NETWORK ERROR> then only the promise -> REJECTED**

:: It helps priorotise tasks, [14:00 min   L:41]
    -> If there are lots of calls then the calls made using 'fetch' will be priorotise -: It has separate queue than normal 'task queue', known as (micro-task queue / priority queue/fetch queue)
        ->It is executed before the normal task queue if both have same time to execute(like both are expected to be in 3sec). It's a VIP queue.
        -> It helps to avoid 'callback hell'.
        -> It helps to avoid 'race condition'.
        -> If normal task queue is expected to happen at 3 sec and fetch-queue task is expected at 4 sec. 
            -> Then obiously 'normal-task-queue' call back will execute before 'fetch-queue'.

:: Special Working of Fetch [15:00 min]

*/
// EXAMPLES::
fetch('https://api.example.com/data') // This is the URL we're fetching data from.
  .then(response => {
    // The 'response' is what the server sends back.
    // We need to convert this response into a format we can use.
    // Usually, the data is in JSON format (JavaScript Object Notation).
    return response.json(); // This converts the response into a JavaScript object.
  })
  .then(data => {
    // Now we have the data from the server, and we can do something with it.
    console.log(data); // Here, we're just logging the data to the console.
  })
  .catch(error => {
    // If there's an error (like if the server is down or the URL is wrong), this block runs.
    console.error('Error:', error); // We print the error message to the console.
  }).finally(()=>{
    console.log("Fetched");
  });

// Why use fetch?
// - Fetch helps you get or send data ((without needing to reload your webpage)).
// - It makes your web pages more interactive and able to show up-to-date information.

// Real-world example:
// Using fetch to get current weather data from a weather API.

fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m')
.then(response => {
  return response.json()}) // Convert the response to JSON.
.then(weatherData => {
  console.log('Current temperature:', weatherData.current_units); 
  return weatherData.current_units;
}).then(units => {
  const temp = units.temperature_2m;
  console.log('Current temperature:', temp);
})
.catch(error => {
  console.error('Could not get the weather:', error); // Print any errors that happen.
});

// Fetch with Options:
// Sometimes, you need to send more complex requests with additional options like headers, body or method type (GET, POST, etc.).

// Example of fetch with options:
fetch('https://api.example.com/data', {
  method: 'POST', // We're sending data using the POST method.
  headers: {
    'Content-Type': 'application/json' // Tells the server we're sending JSON data.
  },
  body: JSON.stringify({ // The actual data we're sending to the server.
    name: 'John Doe',
    age: 25
  })
})
.then(response => response.json())
.then(data => {
  console.log('Server response:', data); // Print the response from the server.
})
.catch(error => {
  console.error('Error:', error); // Print any errors that happen.
});

// Summary:
// - Use fetch to get or send data over the internet without reloading the page.
// - Fetch can handle both simple and complex requests.
// - It's a powerful tool to make your websites more dynamic and responsive to real-time data.  

//---------------------------------------------------------------------------------------------------------------------------------
// OOPs   L:42
//---------------------------------------------------------------------------------------------------------------------------------
/*
Object-Oriented Programming (OOP) is a way of organizing and structuring your code to make it easier to understand and work with.
In OOP, we use objects to represent things in the real world or in our application.
*/
// ------------------------
// 1. CLASSES AND OBJECTS:
// ------------------------
/*
   - A class is like a blueprint for creating objects.
   - An object is an instance of a class, like a building created from a blueprint.
*/

class Car {
    /*
    This is the constructor method. It gets called when we create a new Car object.
    'new' keyword ~~ It creates a new instance of the object.
    */
    constructor(make, model, year) {
      this.make = make; // 'this.make' refers to the 'make' property of the Car object.
      this.model = model; // 'this.model' refers to the 'model' property of the Car object.
      this.year = year; // 'this.year' refers to the 'year' property of the Car object.
    }
  
    // Method to display car details
    displayDetails() {
      console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}`);
    }
  }
  
  // Creating a new object of the Car class
  let myCar = new Car('Toyota', 'Corolla', 2020);
  myCar.displayDetails(); // This will print: Car: Toyota Corolla, Year: 2020
  
  // Explanation:
  /*
  - We defined a Car class with properties like 'make', 'model', and 'year'.
  - The 'constructor' method initializes these properties when a new Car object is created.
  - The 'displayDetails' method prints the details of the car.
  */

  // ------------------------
  // 2. INHERITANCE:
  // ------------------------
  /*
     - Inheritance allows one class to inherit properties and methods from another class.
     - It's like a child class taking on characteristics of a ancestor class.
  */
  class ElectricCar extends Car {
    constructor(make, model, year, batteryLife) {
      super(make, model, year); // 'super' calls the constructor of the ancestor class (Car).
      this.batteryLife = batteryLife; // Adding a new property specific to ElectricCar.
    }
  
    // Method to display battery life
    displayBatteryLife() {
      console.log(`Battery life: ${this.batteryLife} hours`);
    }
  }
  
  // Creating a new object of the ElectricCar class
  let myElectricCar = new ElectricCar('Tesla', 'Model S', 2021, 24);
  myElectricCar.displayDetails(); // This will print: Car: Tesla Model S, Year: 2021
  myElectricCar.displayBatteryLife(); // This will print: Battery life: 24 hours
  
 
 // Explanation:
  /*
  - We created a new class called ElectricCar that extends the Car class.
  - ElectricCar inherits the properties and methods of Car but also has its own property, 'batteryLife', and its own method, 'displayBatteryLife'.
  */

  // ------------------------
  // 3. ENCAPSULATION:
  // ------------------------
  /*
     - Encapsulation means keeping the details (like data) inside an object hidden from the outside world.
     - We use methods to access or update the data instead of changing it directly.
  */
  class Phone {
    constructor(brand, model) {
      this._brand = brand; // The underscore (_) suggests this property is private and should not be accessed directly.
      this._model = model;
    }
  
    // Method to get the phone's brand
    getBrand() {
      return this._brand;
    }
  
    // Method to set the phone's brand
    setBrand(newBrand) {
      this._brand = newBrand;
    }
  
    // Method to display phone details
    displayDetails() {
      console.log(`Phone: ${this._brand} ${this._model}`);
    }
  }
  
  // Creating a new object of the Phone class
  let myPhone = new Phone('Apple', 'iPhone 12');
  myPhone.displayDetails(); // This will print: Phone: Apple iPhone 12
  
  // Changing the brand using the method
  myPhone.setBrand('Samsung');
  myPhone.displayDetails(); // This will print: Phone: Samsung iPhone 12
  
  // Explanation:
  /*
  - We use the 'getBrand' and 'setBrand' methods to access and modify the 'brand' property instead of changing it directly.
  - This helps to control how the data is changed and ensures that the internal state of the object is kept consistent.
  */

  // ------------------------
  // 4. Polymorphism:
  // ------------------------
  /*
     - Polymorphism means "many forms" and allows methods to do different things based on the object they're called on.
  */
  class Animal {
    makeSound() {
      console.log('Some generic animal sound');
    }
  }
  
  class Dog extends Animal {
    makeSound() {
      console.log('Woof! Woof!');
    }
  }
  
  class Cat extends Animal {
    makeSound() {
      console.log('Meow! Meow!');
    }
  }
  
  // Creating objects of the Animal class and its subclasses
  let genericAnimal = new Animal();
  let dog = new Dog();
  let cat = new Cat();
  
  genericAnimal.makeSound(); // This will print: Some generic animal sound
  dog.makeSound(); // This will print: Woof! Woof!
  cat.makeSound(); // This will print: Meow! Meow!
  
  // Explanation:
  /*
  - We have a base class Animal with a method 'makeSound'.
  - The Dog and Cat classes extend Animal and each overrides the 'makeSound' method to provide their own sounds.
  - This is polymorphism in action: the same method 'makeSound' behaves differently based on the object it's called on.
  */

  // Summary:
  /*
  - OOP helps you organize your code into reusable and maintainable chunks.
  - Classes define blueprints for objects.
  - Objects are instances of classes.
  - Inheritance allows one class to use properties and methods from another class.
  - Encapsulation hides internal details and only exposes what is necessary.
  - Polymorphism allows methods to do different things based on the object they are called on.
  */


//---------------------------------------------------------------------------------------------------------------------------------
// Prototyping   L:43 (ADVANCE TOPIC- WATCH AGAIN)
//---------------------------------------------------------------------------------------------------------------------------------
/*
Prototyping is a way to add methods to an object without using a class.

In JavaScript, prototyping is like giving superpowers to objects. Imagine you have a blueprint (like for a car),
and you want every car built from this blueprint to have special abilities (like being able to fly or talk).
Prototyping helps you add these abilities to objects in a smart way without repeating code.
*/

// Example: Prototyping in Action

// Let's create a simple blueprint for a Car.
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Without using prototypes, every car will only know its make and model.
// Let's add a 'start' ability to all cars using prototypes.

Car.prototype.start = function() {
    console.log(this.make + " " + this.model + " is starting.");
};

// Now, when we create a car, it will know how to start!
let myCar2 = new Car("Toyota", "Corolla");
myCar2.start(); // Outputs: "Toyota Corolla is starting."

// Prototypes allow us to share functions and properties among all objects created from the same blueprint (like Car).
// This means we can write less code and keep our program efficient.

// Another Example: Adding a 'stop' ability

Car.prototype.stop = function() {
    console.log(this.make + " " + this.model + " is stopping.");
};

myCar2.stop(); // Outputs: "Toyota Corolla is stopping."

/*
All Data Types are Derived from Objects:
In JavaScript, almost everything is an object. This includes arrays, strings, and even numbers.
They all have special methods and properties that come from their prototypes.

For example:
- Arrays can use methods like push() and pop().
- Strings can use methods like toUpperCase() and slice().

These methods are part of their prototype chains, which are ultimately derived from the "super-ancestor" Object.
*/

// Let's see an example with an array.
let fruits = ["apple", "banana", "cherry"];
console.log(fruits.toString()); // Outputs: "apple,banana,cherry"

// The toString() method is inherited from Array's prototype, which in turn inherits from Object. 
/*
::Object is the Super-Ancestor:
The Object prototype is the ultimate ancestor for all objects in JavaScript. 
If we add a new property or method to Object.prototype, all other objects, including arrays, strings, etc., will inherit it.
*/
// Adding a new prototype to Object(super-ancestor)🚀:
Object.prototype.greet = function() {
    console.log("Hello from the super-ancestor Object!");
};

// Now, every object can use the greet() method.
myCar2.greet(); // Outputs: "Hello from the super-ancestor Object!"
fruits.greet(); // Outputs: "Hello from the super-ancestor Object!"
let myString = "Hello, world!";
myString.greet(); // Outputs: "Hello from the super-ancestor Object!"

/*
However, adding methods directly to Object.prototype is generally not recommended because it affects all objects in your program,
which can lead to unexpected behaviors. It's a powerful feature, so use it wisely!

In summary, prototyping is a powerful feature in JavaScript that helps us build and manage objects more efficiently.
And remember, all objects and data types are connected through their prototype chain to the ultimate super-ancestor: Object.
*/

//INHERITANCE OF OBJECT
class User {
  constructor(name, age, email){
    this.name = name;
    this.age = age,
    this.email = email
  }
}

const Teacher = {
  trained : true,
  subject : "Maths"
}

Object.setPrototypeOf(Teacher, new User("manjit", 34, "manjt123@gmail.com")); // Now 'Teacher' inherits properties of 'User'
console.log(Teacher.name); // Output : manjit

//---------------------------------------------------------------------------------------------------------------------------------
// Call and this in JavaScript   L:44 
//---------------------------------------------------------------------------------------------------------------------------------

// 'this' in JavaScript:
// 'this' is a keyword in JavaScript that refers to the object that is executing the current piece of code.
// The value of 'this' depends on how and where a function is called.

// Example 1: 'this' in a simple function
function showThis() {
  console.log(this);
}
// In a regular function, 'this' usually refers to the global object (window in browsers) or undefined in strict mode.
showThis(); // In the browser, this will log the window object.

// Example 2: 'this' in a method
const person = {
  name: "Alice",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
// In a method, 'this' refers to the object that owns the method (person in this case).
person.greet(); // Outputs: "Hello, Alice"

// 'call' Method in JavaScript:
// 'call' is a method you can use to call a function with a specific 'this' value and arguments.

function introduce(greeting) {
  console.log(greeting + ", my name is " + this.name);
}

const user = { name: "Bob" };

// We can use 'call' to specify that 'this' inside introduce should refer to 'user'.
// 'call' is used to call reference: the first parameter is passed, that first parameter is act as {default} for that call.(LEARN MORE 11:00 min)
introduce.call(user, "Hi"); //first parameter:"user"-> user is default from which 'introduction' function will access data. Outputs: "Hi, my name is Bob"

// Arrow Functions and 'this':
// Arrow functions don't have their own 'this' value. Instead, they inherit 'this' from the surrounding code.

const group = {
  title: "Math Club",
  members: ["Tom", "Jerry", "Spike"],
  showMembers: function() {
    // Using a regular function
    this.members.forEach(function(member) {
      // In this regular function, 'this' does not refer to 'group', so we can't access 'title' directly.
      // This can be solved by storing 'this' in a variable.
      console.log(member + " is part of the " + this.title);
    });
  }
};

group.showMembers(); // Outputs: "Tom is part of the undefined", "Jerry is part of the undefined", "Spike is part of the undefined"

// Let's fix it using an arrow function which doesn't have its own 'this' but inherits from the surrounding method 'showMembers'.
const groupFixed = {
  title: "Math Club",
  members: ["Tom", "Jerry", "Spike"],
  showMembers: function() {
    // Using an arrow function
    this.members.forEach((member) => {
      // Here, 'this' refers to 'group' because arrow functions inherit 'this' from the containing function.
      console.log(member + " is part of the " + this.title);
    });
  }
};

groupFixed.showMembers(); // Outputs: "Tom is part of the Math Club", "Jerry is part of the Math Club", "Spike is part of the Math Club"

// Summary:
// - 'this' refers to the object that is currently calling the function.
// - In regular functions, 'this' can refer to different objects based on how the function is called.
// - The 'call' method allows you to specify the value of 'this' when calling a function.
// - Arrow functions inherit 'this' from the surrounding scope, which is different from regular functions.
