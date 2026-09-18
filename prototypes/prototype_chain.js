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

console.log(Object.getPrototypeOf(child) === parent);
console.log(Object.getPrototypeOf(parent) === grandParent);