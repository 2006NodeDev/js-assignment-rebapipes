/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    try {
        const size = someStr.length;

        if(someStr === undefined || startIndex === undefined || endIndex === undefined)
            throw "Input invalid. Please enter a valid string."
        if(startIndex > size || endIndex > size) 
            throw "Input invalid. Value must be less than or equal to the size of the string."
        else if((startIndex - endIndex) > -1) 
            throw "Input invalid. Starting value must be less than the ending value."
        return someStr.substring(startIndex, endIndex);
    }
    catch(err) {
        return err;
    }
}

console.log(substring("A funny saying", 2, 8));
console.log(substring("Insert inspirational quote here", 20, 26));
console.log(substring("Invalid input test", 0, 50));
