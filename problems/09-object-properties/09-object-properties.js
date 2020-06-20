/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    for(dog in someObj){
        let name = someObj.name
        let age = someObj.age
        let breed = someObj.breed
    return console.log(`${name} is a ${age} year old ${breed}.`);
    }
}

let dog = {name: 'Indie', breed: 'corgi', age: 12,};
(objectProperties(dog));
