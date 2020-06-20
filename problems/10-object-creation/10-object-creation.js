/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

// Object Literal
let dog = {name: "Indie", age: 12};
console.log(dog);

// Constructor
let frog = Object();
frog.name = "Hemingway"
frog.age = 2
console.log(frog);

// ES6 Classes
class Dog {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

let dog2 = new Dog ('Gabby', 10)
console.log(dog2);
