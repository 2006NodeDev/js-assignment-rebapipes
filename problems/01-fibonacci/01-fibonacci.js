/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    let fib = (n) => {
        if (n === 1) {
            return 0
        }
        if (n === 2) {
            return 1
        }
    
        return fib (n - 1) + fib (n - 2)
    }
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(10))