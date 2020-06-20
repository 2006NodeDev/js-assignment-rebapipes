/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  switch (shape) {
    case "Square":
      let line = ""
      for (let i = 1; i <= height; ++i) {
          line += character
      }
      for (let i = 1; i <= height; ++i) {
        console.log(line)
      }
      break;
      
    case "Triangle":
      let line = ""
      for (let i = 1; i <= height; ++i) {
        line += character
        console.log(line)
      }
      break;
  
    case "Diamond":
      x = (height - 1) / 2
      for (let i = 0; i <= x; i++) {
        printDiamond(2 - i, 1 + 2 * i, character)
      }
      for (let i = 1; i < 3; i++) {
        printDiamond(i, -2 * i + 5, character)
      }
      break;
  
    default:
      console.log("Invalid shape")
      break;
    }
  }

  function printDiamond(shape, height, character){
    let line = ""
    for (let i = 0; i < shape; i++) {
      line += ""
    }
    for (let i = 0; i < height; i++) {
      line += character
    }
    for (let i = 0; i < character; i++) {
      line += ""
    }
    console.log(line)
  }

printShape("Diamond", 5, "*");
