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

console.log(student.hasOwnProperty("age"));
console.log(student.hasOwnProperty("name"));