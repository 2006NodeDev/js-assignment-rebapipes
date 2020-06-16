/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    let memo = { //memo method
        1:0,
        2:1,
    }

    let fib = (n) => {
    
        if(memo[n] || memo[n] === 0){
            return memo[n]
        }
        else{
            memo[n] = fib(n - 1) + fib(n - 2)
            return memo[n]
        }
    }
}

console.log(fib(n)); //prints fib(nth)
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(10));
console.log(fib(100));
console.log(fib(1000))
