## Introduction:

In this task, I learned some of the more advanced features of JavaScript. I already knew the basic JavaScript concepts as my background is bachelors in software engineering, but these topics helped me understand how JavaScript works in more detail.

The main topics I practiced were:

- Prototypes and the prototype chain
- Destructuring
- Spread and rest operators
- Optional chaining
- Iterators
- Generators
- ES Modules
- CommonJS
- Basic design patterns

I used small examples for each topic so that I could understand them by writing and running the code.

---

# 1. Prototypes:

A prototype is an object from which another object can get properties and methods.

JavaScript objects can inherit things from other objects. This is one of the main ways inheritance works in JavaScript.

## Example

```jsx
const person = {
    name: "Ali",

    greet() {
        console.log("Hello!");
    }
};

const student = Object.create(person);

student.age = 21;

console.log(student.name);
console.log(student.age);

student.greet();
```

### Output

```
Ali
21
Hello!
```

Here, `age` belongs directly to `student`.

The `name` property and `greet()` method are not directly inside `student`. They are inherited from `person`.

We can check this using `hasOwnProperty()`:

```jsx
console.log(student.hasOwnProperty("age"));
console.log(student.hasOwnProperty("name"));
```

Output:

```
true
false
```

So this shows that `age` belongs to the student object, while `name` comes from its prototype.

---

# 2. Prototype Chain:

JavaScript does not only have one level of inheritance. An object can have a prototype, and that prototype can also have another prototype.

This creates a prototype chain.

## Example

```jsx
const grandParent = {
    familyName: "Ahmed"
};

const parent = Object.create(grandParent);

parent.parentName = "Usman";

const child = Object.create(parent);

child.childName = "Ali";

console.log(child.childName);
console.log(child.parentName);
console.log(child.familyName);
```

### Output

```
Ali
Usman
Ahmed
```

The `child` object does not have `parentName` directly, but JavaScript finds it in `parent`.

It also does not have `familyName`, so JavaScript continues searching and finds it in `grandParent`.

The chain looks like this:

```
child
  ↓
parent
  ↓
grandParent
  ↓
Object.prototype
  ↓
null
```

If JavaScript cannot find a property in the object itself, it checks its prototype. It keeps going through the chain until it finds the property or reaches `null`.

---

# 3. Constructor Functions and Prototypes:

Another common way to use prototypes is with constructor functions.

```jsx
function Student(name, rollNumber) {
    this.name = name;
    this.rollNumber = rollNumber;
}

Student.prototype.introduce = function () {
    console.log(
        `My name is ${this.name} and my roll number is ${this.rollNumber}`
    );
};

const student1 = new Student("Ali", 101);
const student2 = new Student("Ahmed", 102);

student1.introduce();
student2.introduce();

console.log(
    Object.getPrototypeOf(student1) === Student.prototype
);
```

### Output

```
My name is Ali and my roll number is 101
My name is Ahmed and my roll number is 102
true
```

The `introduce()` function is stored in `Student.prototype`.

Both objects can use the same method instead of creating a separate copy of the function for every object.

---

# 4. ES6+ Features:

JavaScript introduced many useful features in ES6 and later versions.

The features I practiced here are:

- Destructuring
- Spread
- Rest
- Optional chaining

---

# 5. Destructuring:

Destructuring allows us to take values from arrays or objects and store them in variables more easily.

## Object Destructuring;

```jsx
const student = {
    name: "Ali",
    age: 21,
    department: "Software Engineering"
};

const { name, age, department } = student;

console.log(name);
console.log(age);
console.log(department);
```

### Output

```
Ali
21
Software Engineering
```

Without destructuring, I would have to write:

```jsx
const name = student.name;
const age = student.age;
const department = student.department;
```

So destructuring makes the code shorter.

## Array Destructuring;

```jsx
const marks = [80, 75, 90];

const [english, maths, programming] = marks;

console.log(english);
console.log(maths);
console.log(programming);
```

Output:

```
80
75
90
```

We can also skip values:

```jsx
const numbers = [10, 20, 30];

const [first, , third] = numbers;

console.log(first);
console.log(third);
```

Output:

```
10
30
```

---

# 6. Spread Operator:

The spread operator is written using three dots:

```jsx
...
```

It expands the values of an array or object.

## Combining Arrays;

```jsx
const first = [1, 2, 3];
const second = [4, 5, 6];

const result = [...first, ...second];

console.log(result);
```

Output:

```
[1, 2, 3, 4, 5, 6]
```

## Copying an Array;

```jsx
const original = [10, 20, 30];

const copy = [...original];

console.log(copy);
```

The spread operator is also useful with objects.

```jsx
const student = {
    name: "Ali",
    age: 21
};

const newStudent = {
    ...student,
    department: "Software Engineering"
};

console.log(newStudent);
```

Output:

```
{
    name: "Ali",
    age: 21,
    department: "Software Engineering"
}
```

---

# 7. Rest Operator:

The rest operator also uses three dots, but its purpose is different from spread.

It collects multiple values into an array.

```jsx
function add(...numbers) {
    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
}

console.log(add(10, 20));
console.log(add(10, 20, 30, 40));
```

Output:

```
30
100
```

A simple way I remember the difference is:

```
Spread = expand

Rest = collect
```

---

# 8. Optional Chaining:

Optional chaining uses:

```jsx
?.
```

It allows us to safely access properties that might not exist.

## Example

```jsx
const student = {
    name: "Ali",
    address: {
        city: "Islamabad"
    }
};

console.log(student.address?.city);
console.log(student.contact?.phone);
console.log(student.contact?.address?.city);
```

Output:

```
Islamabad
undefined
undefined
```

Normally, trying to access a property from an object that does not exist can cause an error.

For example:

```jsx
console.log(student.contact.phone);
```

This can give an error because `contact` does not exist.

Using:

```jsx
student.contact?.phone
```

returns `undefined` instead of throwing the error.

---

# 9. Iterators:

An iterator is an object that allows us to go through values one at a time.

An iterator has a `next()` method.

The `next()` method returns an object containing:

```
value
done
```

## Array Iterator;

Arrays already have a built-in iterator.

```jsx
const numbers = [10, 20, 30];

const iterator = numbersSymbol.iterator;

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
```

Output:

```
{ value: 10, done: false }
{ value: 20, done: false }
{ value: 30, done: false }
{ value: undefined, done: true }
```

The `done` value tells us whether there are more values.

For example:

```
{ value: 10, done: false }
```

means there is still a value.

While:

```
{ value: undefined, done: true }
```

means the iteration has finished.

---

# 10. Creating a Custom Iterator:

We can also create our own iterator.

```jsx
function createNumberIterator(max) {
    let current = 1;

    return {
        next() {
            if (current <= max) {
                return {
                    value: current++,
                    done: false
                };
            }

            return {
                value: undefined,
                done: true
            };
        }
    };
}

const numbers = createNumberIterator(3);

console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
```

Output:

```
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: undefined, done: true }
```

This helped me understand what is happening behind an iterator instead of only using the built-in ones.

---

# 11. Generators:

Generators are another way of creating iterator-like behavior.

A generator function uses:

```jsx
function*
```

and uses `yield` to return values one at a time.

## Basic Generator;

```jsx
function* generateNumbers() {
    yield 10;
    yield 20;
    yield 30;
}

const numbers = generateNumbers();

console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
```

Output:

```
{ value: 10, done: false }
{ value: 20, done: false }
{ value: 30, done: false }
{ value: undefined, done: true }
```

The important thing about generators is that the function can pause at a `yield`.

When `next()` is called again, it continues from where it stopped.

---

# 12. Generator Pause Example:

```jsx
function* test() {
    console.log("First");
    yield 1;

    console.log("Second");
    yield 2;

    console.log("Third");
    yield 3;
}

const generator = test();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
```

The generator does not run everything at once.

It works step by step:

```
First
1

Second
2

Third
3
```

This is one of the main differences between a normal function and a generator.

---

# 13. Generators with for...of:

Generators can also be used with `for...of`.

```jsx
function* studentNames() {
    yield "Ali";
    yield "Ahmed";
    yield "Usman";
    yield "Hamza";
}

for (const name of studentNames()) {
    console.log(name);
}
```

Output:

```
Ali
Ahmed
Usman
Hamza
```

---

# 14. Iterator vs Generator:

The basic difference I learned is:

```
Iterator
    ↓
Object with a next() method

Generator
    ↓
Special function using function* and yield
```

A generator automatically handles a lot of the iterator logic for us.

---

# 15. ES Modules:

ES Modules are used to divide JavaScript code into different files.

They use:

```jsx
export
import
```

For example, we can have a file called `math.js`.

## math.js;

```jsx
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}
```

Then another file can import these functions.

## app.js;

```jsx
import { add, subtract } from "./math.js";

console.log(add(10, 5));
console.log(subtract(10, 5));
```

Output:

```
15
5
```

This is useful because instead of putting all the code in one large file, we can separate it into smaller files.

---

# 16. Default Export:

We can also have a default export.

## user.js

```jsx
export default class User {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(this.name);
    }
}
```

Then we can import it:

## app.js

```jsx
import User from "./user.js";

const user = new User("Ali");

user.showName();
```

Output:

```
Ali
```

---

# 17. CommonJS:

CommonJS is another module system, especially associated with Node.js.

Instead of:

```jsx
import
export
```

CommonJS uses:

```jsx
require()
module.exports
```

## math.cjs;

```jsx
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    add,
    subtract
};
```

Then we can use these functions in another file.

## app.cjs;

```jsx
const math = require("./math.cjs");

console.log(math.add(10, 5));
console.log(math.subtract(10, 5));
```

Output:

```
15
5
```

---

# 18. ES Modules vs CommonJS:

The main difference is the syntax they use.

| ES Modules | CommonJS |
| --- | --- |
| `import` | `require()` |
| `export` | `module.exports` |
| Modern JavaScript module system | Traditional Node.js module system |

The easiest way I remember it is:

```
ES Modules:

export → import

CommonJS:

module.exports → require()
```

Both are used to divide code into separate modules, but they use different syntax and module systems.

---

# 19. Basic Design Patterns:

Design patterns are common solutions to programming problems.

For this task, I practiced two basic patterns:

- Singleton
- Factory

---

# 20. Singleton Pattern:

The Singleton pattern is used when we want only one instance of something.

For example, we can use it for a database connection.

```jsx
class Database {
    constructor() {
        if (Database.instance) {
            return Database.instance;
        }

        this.connection = "Database Connected";

        Database.instance = this;
    }

    connect() {
        console.log(this.connection);
    }
}

const db1 = new Database();
const db2 = new Database();

db1.connect();

console.log(db1 === db2);
```

Output:

```
Database Connected
true
```

Both variables refer to the same instance.

---

# 21. Factory Pattern:

The Factory pattern can be used when we want a function to create different types of objects.

```jsx
class Student {
    constructor(name) {
        this.name = name;
        this.type = "Student";
    }
}

class Teacher {
    constructor(name) {
        this.name = name;
        this.type = "Teacher";
    }
}

function personFactory(type, name) {
    if (type === "student") {
        return new Student(name);
    }

    if (type === "teacher") {
        return new Teacher(name);
    }

    return null;
}

const student = personFactory("student", "Ali");
const teacher = personFactory("teacher", "Ahmed");

console.log(student);
console.log(teacher);
```

Output:

```
Student {
    name: "Ali",
    type: "Student"
}

Teacher {
    name: "Ahmed",
    type: "Teacher"
}
```

Instead of creating the objects directly every time, the factory function decides which type of object should be created.