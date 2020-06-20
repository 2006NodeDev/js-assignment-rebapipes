/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
  return someArr.splice(0, index)
}

let exampleArr = ['dog', 4, 'cat', 5, 'fish', 6, 'rabbit', 7]
console.log(spliceElement(exampleArr, 8));
