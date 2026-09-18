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


function* studentNames() {
    yield "Ali";
    yield "Ahmed";
    yield "Usman";
    yield "Hamza";
}

for (const name of studentNames()) {
    console.log(name);
}