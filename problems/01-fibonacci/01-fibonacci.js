/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n, memo) {
    memo = memo || {};

    if (memo[n]) return memo[n];
    if (n <= 1) return 1;

    return memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(10));
console.log(fib(100));
console.log(fib(1000))
