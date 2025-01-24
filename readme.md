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
