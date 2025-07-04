const fibonacci = function(n) {
    
    // Convert string input to number
    n = Number(n)
    
    // rejects negative inputs 
    if (n < 0) return "OOPS";
    
    if (n === 0) return 0;
    if (n === 1) return 1;

    // iteration
    // let a = 0, b = 1;
    // for (let i = 2; i <= n; i++) {
    //     const temp = a + b;
    //     a = b;
    //     b = temp;
    // }
    // return b;

    // recursive
    return fibonacci(n - 1) + fibonacci(n - 2);
    
};

// Do not edit below this line
module.exports = fibonacci;
