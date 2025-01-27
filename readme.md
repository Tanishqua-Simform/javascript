# JavaScript

Howdy mate! We'll go Aussie today, 'aight! Les gat inu iyt - Who am I kidding here :')

Okay enough fun for the day! Now let's take a deep dive into the world of JavaScript.

##### Dt. 24 Jan, 2025.

## JavaScript and the Browser

- JavaScript is executed in the browser and interacts with HTML and CSS to build dynamic web pages.
- To log output or debug, use `console.log` in the browser's developer tools console.

## Variables

- Variables can be declared in 3 ways -

- var -
  - Function-scoped.
  - Can be re-declared and updated within the same scope.
  - Hoisted but initialized as `undefined`.
- let -
  - Block-scoped.
  - Can be updated but not re-declared within the same block.
  - Hoisted but not initialized (Temporal Dead Zone).
- const -
  - Block-scoped.
  - Cannot be re-declared or updated after initialization.
  - Used for constants and immutable values.

## Data Types

#### Primitive Data Types -

- Number -
  - Includes integers and floating-point numbers.
  - Special values: `Infinity`, `-Infinity`, and `NaN`.
- String -
  - Sequence of characters enclosed in single (`'`), double (`"`), or backtick (`` ` ``) quotes.
  - Example: `let greeting = "Hello!";`
- Boolean -
  - Represents `true` or `false`.
- Undefined -
  - Indicates a variable has been declared but not assigned a value.
- Null -
  - Represents an intentional absence of value.
- BigInt -
  - Used for integers beyond the safe range of `Number`.
  - Example: `let big = 12345678901234567890n;`
- Symbol -
  - Unique and immutable value primarily used as object keys.

#### Non-Primitive Data Types:

- Object - A collection of key-value pairs.
  ```javascript
  let person = { name: "Tanishqua", age: 25 };
  ```
- Arrays and functions are also objects.

## Operators

- Arithmetic Operators -
  - `+`, `-`, `*`, `/`, `%`, `**`
- Assignment Operators -
  - `=`, `+=`, `-=`, `*=`, `/=`, etc.
- Comparison Operators -
  - `==`, `!=`, `===`, `!==`, `>`, `<`, `>=`, `<=`
- Logical Operators -
  - `&&`, `||`, `!`
- Bitwise Operators -
  - `&`, `|`, `^`, `~`, `<<`, `>>`
- Ternary Operator -
  - `condition ? value1 : value2`
- Type Operators -
  - `typeof`, `instanceof`

## Loops

- Types of Loops:

- for Loop -
  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  ```
- while Loop -
  ```javascript
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  ```
- do...while Loop -
  ```javascript
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 5);
  ```
- for...of -
  - Iterates over iterable objects (like arrays).
  ```javascript
  for (let num of [1, 2, 3]) {
    console.log(num);
  }
  ```
- for...in -
  - Iterates over enumerable properties of an object.
  ```javascript
  let obj = { a: 1, b: 2 };
  for (let key in obj) {
    console.log(key, obj[key]);
  }
  ```
- forEach -
  - Higher-order function for arrays.
  ```javascript
  [1, 2, 3].forEach((num) => console.log(num));
  ```

## Arrays

- Common Array Methods:

  - push: Adds elements to the end of the array.
  - pop: Removes the last element of the array.
  - shift: Removes the first element of the array.
  - unshift: Adds elements to the beginning of the array.
  - splice: Modifies the array by adding/removing/replacing elements.

    ```javascript
    let arr = [1, 2, 3];
    arr.splice(1, 1, 4); // Replaces element at index 1 with 4
    console.log(arr); // [1, 4, 3]
    ```

  - slice: Returns a shallow copy of a portion of the array.
  - map: Returns a new array after applying a function to each element.
  - filter: Returns a new array with elements that satisfy a condition.
  - reduce: Reduces the array to a single value by applying a function.

## Functions

- Function Types:

  - Regular Functions:
    ```javascript
    function add(a, b) {
      return a + b;
    }
    ```
  - Function Expressions:
    ```javascript
    const multiply = function (a, b) {
      return a * b;
    };
    ```
  - Arrow Functions:
    ```javascript
    const divide = (a, b) => a / b;
    ```

### Special Functions:

- Callback Functions:

  - Functions passed as arguments to other functions.

  ```javascript
  function greet(callback) {
    console.log("Hello!");
    callback();
  }
  greet(() => console.log("How are you?"));
  ```

- Higher-Order Functions:
  - Functions that take other functions as arguments or return them (e.g., `map`, `filter`, `forEach`).

## DOM (Document Object Model)

- Selecting Elements:

  - getElementById:

  ```javascript
  document.getElementById("myId");
  ```

  - getElementsByClassName and getElementsByTagName.
  - querySelector and querySelectorAll.

- Working with Elements:

  - tagName: Gets the tag name of an element.
  - innerText, innerHTML, textContent: Used to manipulate text content.

- DOM Tree:

  - Composed of text nodes, comment nodes, and child nodes.
  - Use `firstChild`, `lastChild`, and `children` for navigation.

- Relationships:

  - Parent-Child-Sibling:

  - `parentNode`, `childNodes`, `nextSibling`, `previousSibling`.

- Modifying the DOM:

  - appendChild: Adds a child element.
  - removeChild: Removes a child element.

  ```javascript
  let parent = document.getElementById("parent");
  let child = document.createElement("div");
  parent.appendChild(child);
  parent.removeChild(child);
  ```

With this we have gathered the gist of JavaScript. I have followed the course by [Shraddha Khapra](https://www.youtube.com/watch?v=VlPiVmYuoqw) and practiced JS functions and DOM manipulations.

You can look at the practice.js and index.html file, at your own risk. Will continue from event handlers the next time.

You've been a good audience so far. See you on Monday :)

##### Dt. 27 Jan, 2025.

We will continue with the course from where we left off!

## Event Handling

- Events are actions or occurrences that happen in the browser, such as clicks, mouse movements, or keyboard presses.
- Event listeners are used to handle events and execute specified code.
  ```javascript
  document.getElementById("button").addEventListener("click", () => {
    console.log("Button clicked");
  });
  ```
- Common events include click, mouseover, keydown, focus, blur, and submit.
- Event propagation consists of three phases: capturing, target, and bubbling.
- The `stopPropagation` method can stop event propagation.
- The `preventDefault` method prevents the default action of an event (e.g., stopping form submission).

## Rock Paper Scissors Game

- To understand the working of JavaScript in more immersive manner, I have made a Rock, paper, scissors game.
- The [Preview](GamePreview.png) of the game.
- The source code is added in the "Rock, Paper, Scissor" directory.

## Classes and Objects

- Classes are templates for creating objects.

  ```javascript
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }

  const person1 = new Person("Alice", 30);
  console.log(person1.greet());
  ```

- Objects are instances of classes or standalone collections of key-value pairs.
  ```javascript
  const car = {
    brand: "Toyota",
    model: "Camry",
    start: function () {
      console.log("Car started");
    },
  };
  ```

## Prototypes

- Prototypes allow objects to inherit properties and methods from other objects.
- Every JavaScript object has a prototype, accessible via `__proto__`.

  ```javascript
  function Animal(name) {
    this.name = name;
  }

  Animal.prototype.speak = function () {
    return `${this.name} makes a noise.`;
  };

  const dog = new Animal("Dog");
  console.log(dog.speak());
  ```

## Constructor

- A constructor is a special method used to initialize objects in a class.
- In traditional JavaScript, constructors are functions used to create objects with specific properties and methods.

  ```javascript
  function Car(make, model) {
    this.make = make;
    this.model = model;
  }

  const myCar = new Car("Honda", "Civic");
  console.log(myCar);
  ```

## Async Await

- Async functions enable asynchronous, promise-based behavior in a cleaner, synchronous-looking way.
  ```javascript
  async function fetchData() {
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  fetchData();
  ```
- The `await` keyword pauses execution until a promise is resolved or rejected.

## Promise Chain

- Promises handle asynchronous operations and allow chaining multiple `.then` calls.
  ```javascript
  fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  ```
- The `catch` method handles errors that occur in the chain.

## Callback Hell

- Nested callbacks can lead to hard-to-read and error-prone code.
  ```javascript
  setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
      console.log("Step 2");
      setTimeout(() => {
        console.log("Step 3");
      }, 1000);
    }, 1000);
  }, 1000);
  ```
- Can be mitigated using promises or async/await.

## Fetch API

- Provides a modern way to make HTTP requests.
  ```javascript
  fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
  ```
- Supports additional options such as method, headers, and body.

## JSON and AJAX

- JSON (JavaScript Object Notation) is a lightweight data format often used for communication between client and server.
  ```javascript
  const jsonString = '{"name": "John", "age": 25}';
  const obj = JSON.parse(jsonString);
  console.log(obj.name); // John
  ```
- AJAX (Asynchronous JavaScript and XML) allows for fetching data without refreshing the page, often using `XMLHttpRequest` or `fetch`.

## HTTP Verbs

- Common HTTP methods include:
  - GET: Retrieve data from a server.
  - POST: Send data to a server.
  - PUT: Update existing data on a server.
  - DELETE: Remove data from a server.

## Response Status Codes

- Status codes indicate the outcome of an HTTP request:
  - 200: OK
  - 201: Created
  - 400: Bad Request
  - 401: Unauthorized
  - 403: Forbidden
  - 404: Not Found
  - 500: Internal Server Error

With this, we have successfully completed our Javascript course on youtube. To go through the notes refer this [link](https://drive.google.com/drive/folders/1nweZ9gZBRqqgPfdPCLJbJPrfuAARV_8e)

Supposed to cover LMS videos today but due to jquery session and soft skills session, I have shifted those task to tomorrow.

We'll cover the rest of the videos and start the Calculator task from tomorrow.
