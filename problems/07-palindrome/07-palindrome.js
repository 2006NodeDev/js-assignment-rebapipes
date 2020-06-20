/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    let myStr = true;
        for (let i = 0; i <= someStr.length - 1; i++) {
            if (someStr[i] !== someStr[someStr.length - i - 1]) {
                myStr = false
            }
        } if (myStr == false) {
            return false
        } else {
            return true
        } 
}

console.log(isPalindrome('ma\'am'));
console.log(isPalindrome('not a Palindrome'));
console.log(isPalindrome('bob'));
console.log(isPalindrome('test for Palindrome'));
