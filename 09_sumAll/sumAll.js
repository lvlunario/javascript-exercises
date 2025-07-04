const sumAll = function(i, n) {
    
    function isDecimal(num) {
         return (num % 1);
    }

    // switch if first value is bigger
    if (i > n) {
        let x = i;
        i = n;
        n = x;
    }
    
    // check if negative values
    if (i < 0 || n < 0) {
        return 'ERROR';
    }

    // check if decimal
    if (isDecimal(i) || isDecimal(n)) {
        return 'ERROR';
    }

    // check if string
    if (typeof i == "string" || typeof n == "string") {
        return 'ERROR';
    }

    // check if array
    if (Array.isArray(i) || Array.isArray(n)) {
        return 'ERROR';
    }

    let sum = 0;
    while (i <= n) {
        sum += i;
        i++; 
    }
    return sum;

    /*

const sumAll = function (min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }

    // An alternative way to swap the values of min and max like above is to use the array destructuring syntax.
    // Here's an optional article on it: https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
    // if (min > max) [min, max] = [max, min];   


    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};
    */


};

// Do not edit below this line
module.exports = sumAll;
