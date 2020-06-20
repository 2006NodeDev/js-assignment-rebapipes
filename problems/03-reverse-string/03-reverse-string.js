/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    return someStr.split("").reverse().join("");
}

stringOne = "hello world"
stringTwo = "howdy y\'all"
console.log(reverseStr(stringOne));
console.log(reverseStr(stringTwo));
console.log(reverseStr(stringOne), reverseStr(stringTwo));
